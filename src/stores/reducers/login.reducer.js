import {LOGIN_FAILURE} from '../actions/ActionTypes';

const initState = {
  message: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_FAILURE: {
      return {...state, message: action.message};
    }
    default:
        console.log(1111);
      return state;
  }
};

export default loginReducer;
