import {USER_STATUS_SECTION, USER_EXPIRED, USER_INSPIRED} from './ActionTypes';

export const checkUserStatusSection = () => {
  return {
    type: USER_STATUS_SECTION,
  };
};

export const userExpiredAction = () => {
  return {
    type: USER_EXPIRED,
  };
};

export const userInspiredAction = () => {
  return {
    type: USER_INSPIRED,
  };
};
