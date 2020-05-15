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

class App extends Component {
  constructor(props) {
    super(props);

    global.language = vi;
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
sagaMiddleware.run(rootSaga);
