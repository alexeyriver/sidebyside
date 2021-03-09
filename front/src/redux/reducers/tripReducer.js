import {INIT_TRIPS, DELETE_TRIPS, ADD_TRIPS} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.tripState) {
  preloadState = {
   trips: windowState.tripState.trips
  }
} else {
  preloadState = {trips:[]}
}

export const tripReducer = (trips = preloadState, action) => {
  switch (action.type) {
    case INIT_TRIPS:
      return {
        ...state,trips:action.payload
      }
    case ADD_TRIPS:
        return {
          // ...state.trips,trips:state.trips,action.payload
        }

      case DELETE_TRIPS:

        return {
          ...state,trips:[...state.trips.filter(el => el._id !== action.payload)]
        }
      
    
    default:
      return trips;
  }
};

