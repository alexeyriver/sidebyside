import {
  ADD_PROFILE_PICTURE,
  AUTH_ERROR,
  AUTH_SUCCESSFULLY,
  CHANGE_DATA,
  CHANGE_ERROR, INIT_MESSAGES,
  INIT_PROFILE, INIT_SENDER,
  LOGOUT
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.auth) {
  preloadState = {
    isAuth: windowState.auth.isAuth,
    user: windowState.auth.user,
  };
} else {
  preloadState = { isAuth: false, user: {}, authError: null };
}

export const authReducer = (state = preloadState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state, isAuth: true, user: action.payload,
      };
    case AUTH_ERROR:
      return { ...state, authError: action.payload };
    case LOGOUT:
      console.log('logout ')
      window.localStorage.setItem('state', '{}');
      return {
        ...state, isAuth: false, user: {}, authError: null, changeError: null,
        state: {}
      };
    case CHANGE_DATA:
         return {
        ...state, user: { ...state.user, name: action.payload.name, email: action.payload.email,about:action.payload.about}
         }

    case ADD_PROFILE_PICTURE:
      return {
        ...state,user: {...state.user,file:action.payload.data.file }
      }

    case INIT_PROFILE:
      return { ...state, user: { ...state.user } };

    case INIT_MESSAGES:{
      return {...state,user:{...state.user,messages:action.payload}}
    }

    case CHANGE_ERROR:
      return { ...state, changeError: action.payload };
    default:
      return state;
  }
};
