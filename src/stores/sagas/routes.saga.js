import {
  USER_STATUS_SECTION,
  USER_EXPIRED,
  USER_INSPIRED,
} from '../actions/ActionTypes';
import {put, takeLatest, call, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import Utilities from '../../utils/Utilities';

function getDataInServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('result');
    }, 3000);
  });
}

async function getDataInAsyncStorage() {
  const expiredTimeDay = await AsyncStorage.getItem('refreshExpiredAt');
  return expiredTimeDay;
}

function* checkTransactionUser() {
  try {
    const [data, expiredTimeDay] = yield all([
      call(getDataInServer),
      call(getDataInAsyncStorage),
    ]);
    Utilities.log(data);
    Utilities.log('refreshExpiredAtr:' + expiredTimeDay);
    if (expiredTimeDay !== null) {
      let expired = expiredTimeDay * 1000 - new Date().getTime();
      if (expired > 0) {
        yield put({type: USER_INSPIRED});
      } else {
        yield put({type: USER_EXPIRED});
      }
    } else {
      yield put({type: USER_EXPIRED});
    }
  } catch (error) {
    yield put({type: USER_EXPIRED});
    Utilities.logException('checkTransactionUser', error);
  }
}

export function* watchUserStatusSection() {
  yield takeLatest(USER_STATUS_SECTION, checkTransactionUser);
}
