import {
  USER_EXPIRED,
  USER_INSPIRED,
  LOGIN_SUCCESS,
} from '../actions/ActionTypes';

const initState = {
  isSplash: true,
  isLogin: true,
};

const routesReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_EXPIRED: {
      return {...state, isSplash: false, isLogin: true};
    }
    case USER_INSPIRED: {
      return {...state, isSplash: false, isLogin: false};
    }
    case LOGIN_SUCCESS: {
      return {...state, isSplash: false, isLogin: false};
    }
    default:
      return state;
  }
};

export default routesReducer;
