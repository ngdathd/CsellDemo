import {LOGIN} from './ActionTypes';

export const loginAction = (username, password) => {
  return {
    type: LOGIN,
    username,
    password,
  };
};
