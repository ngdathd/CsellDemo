import {all} from 'redux-saga/effects';
import {watchUserStatusSection} from './routes.saga';
import {watchUserLogin} from './login.saga';

export default function* rootSaga() {
  yield all([watchUserStatusSection(), watchUserLogin()]);
}
