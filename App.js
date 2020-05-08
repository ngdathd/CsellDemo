import * as React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './src/stores/reducers';
import rootSaga from './src/stores/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

import Routes from './src/views/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
sagaMiddleware.run(rootSaga);
