import {all} from 'redux-saga/effects';
import {watchUserStatusSection} from './routes.saga';

export default function* rootSaga() {
  yield all([watchUserStatusSection()]);
}
