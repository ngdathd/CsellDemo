import {combineReducers} from 'redux';
import routesReducer from './routes.saga';

const allReducers = combineReducers({
  routesReducer,
});

export default allReducers;
