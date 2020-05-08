import React, {Component} from 'react';
import {ToolbarComponent} from '../../components';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {Button, Text} from 'react-native';

class Social extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToolbarComponent
          title="Social"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: true,
            buttonFilter: true,
          }}
        />
        <Button title="TRU" onPress={() => decrement()} />
        <Text>{store.getState().count}</Text>
        <Button title="CONG" onPress={() => increment()} />
      </Provider>
    );
  }
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function increment() {
  return {type: INCREMENT};
}

function decrement() {
  return {type: DECREMENT};
}

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

// const unsubscribe = store.subscribe(() => console.log(store.getState().count));

// store.dispatch(increment());

// store.dispatch(increment());

// store.dispatch(decrement());

// unsubscribe();
Social = connect()(Social);
export default Social;
