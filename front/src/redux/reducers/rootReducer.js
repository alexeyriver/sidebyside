import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
});

export default rootReducer;
