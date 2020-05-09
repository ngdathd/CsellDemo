import {combineReducers} from 'redux';
import routesReducer from './routes.reducer';
import loginReducer from './login.reducer';

const allReducers = combineReducers({
  routesReducer,
  loginReducer,
});

export default allReducers;
