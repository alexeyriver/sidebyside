import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { authReducer } from './authReducer';
import {chatReducer} from "./chatReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
  chats:chatReducer
});

export default rootReducer;
