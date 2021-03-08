import { INIT_TRIPS} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.trips) {
  preloadState = {
    trips: windowState.trips,
    
  };
} else {
  preloadState = { };
}

export const tripReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_TRIPS:
      return {
        ...state, trips:[ action.payload]
      };
    
    default:
      return state;
  }
};

