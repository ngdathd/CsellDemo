import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './src/stores/reducers';
import rootSaga from './src/stores/sagas/rootSaga';

import vi from './src/config/locates/vi.json';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

import Routes from './src/views/Routes';

import {Alert, Platform} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import messaging, {AuthorizationStatus} from '@react-native-firebase/messaging';

class App extends Component {
  constructor(props) {
    super(props);

    global.language = vi;
  }

  getDeviceInfo() {
    const uniqueId = DeviceInfo.getUniqueId();
    console.log('uniqueId: ' + uniqueId);

    const deviceId = DeviceInfo.getDeviceId();
    console.log('deviceId: ' + uniqueId);
  }

  async getRegistrationToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
    } else {
      console.log('no token');
    }
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus === AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      this.requestUserPermission().catch((error) => console.log(error));
    }
    this.getDeviceInfo();
    this.getRegistrationToken().catch((error) => console.log(error));
  }
}

export default App;
sagaMiddleware.run(rootSaga);
