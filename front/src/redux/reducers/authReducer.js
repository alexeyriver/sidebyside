import { AUTH_ERROR, AUTH_SUCCESSFULLY, LOGOUT } from '../types';

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
      window.localStorage.removeItem('state');
      return {
        ...state, isAuth: false, user: { }, authError: null, changeError: null, customer: {},
      };
    default:
      return state;
  }
};
