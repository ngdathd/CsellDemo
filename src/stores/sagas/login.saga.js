import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/ActionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {serviceClient} from '../../services';
import * as Constants from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import Utilities from '../../utils/Utilities';

function loginWithUser(user) {
  return serviceClient.postDefault(Constants.BASE_URL + 'auth/login', user);
}

function* loginWithPassword(action) {
  try {
    let user = {
      username: action.username,
      password: action.password,
    };
    const response = yield call(loginWithUser, user);
    const data = response.data;
    if (data.code === 0) {
      let tokenObj = data.data.token;
      let userObj = data.data.user;
      global.token = tokenObj.accessToken;
      global.uid = userObj.id;
      global.userObject = userObj;
      let res = yield AsyncStorage.multiSet([
        ['accessToken', JSON.stringify(tokenObj.accessToken)],
        ['refreshToken', JSON.stringify(tokenObj.refreshToken)],
        ['accessExpiredAt', JSON.stringify(tokenObj.accessExpiredAt)],
        ['refreshExpiredAt', JSON.stringify(tokenObj.refreshExpiredAt)],
        ['userObj', JSON.stringify(userObj)],
      ]);
      Utilities.showHideRootLoading(false);
      if (res) {
        yield put({type: LOGIN_FAILURE, message: 'LOGIN_FAIL'});
      } else {
        yield put({type: LOGIN_SUCCESS});
      }
    } else {
      Utilities.showHideRootLoading(false);

      Utilities.showToastError(data.message);
      yield put({type: LOGIN_FAILURE, message: data.message});
    }
  } catch (error) {
    yield put({type: LOGIN_FAILURE, message: error.message});
  }
}

export function* watchUserLogin() {
  yield takeLatest(LOGIN, loginWithPassword);
}
