import { INIT_TRIPS,DELETE_TRIPS,ADD_TRIPS} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.trips) {
  preloadState = windowState.trips
} else {
  preloadState = {}
}

export const tripReducer = (trips = preloadState, action) => {
  switch (action.type) {
    case INIT_TRIPS:
      console.log(trips,'init');
      return  action.payload    

      case ADD_TRIPS:
        return [...trips, action.payload]

      case DELETE_TRIPS:
        console.log(trips,'delet');
        return trips.filter(el=>el._id != action.payload)
      
    
    default:
      return trips;
  }
};

