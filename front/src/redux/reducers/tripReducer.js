import { INIT_TRIPS} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.trips) {
  preloadState = windowState.trips    
  
} else {
  preloadState = { };
}

export const tripReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_TRIPS:
      return  state, action.payload      
      
    
    default:
      return state;
  }
};

