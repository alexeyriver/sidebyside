import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { authReducer } from './authReducer';
import {chatReducer} from "./chatReducer";
import{tripReducer} from './tripReducer'
const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
  chats:chatReducer,
  trips:tripReducer
});

export default rootReducer;
