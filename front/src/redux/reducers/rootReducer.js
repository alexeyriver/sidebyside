import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { authReducer } from './authReducer';
import{tripReducer} from './tripReducer';

const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
  tripState:tripReducer

});

export default rootReducer;
