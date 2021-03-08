import { INIT_TRIPS,DELETE_TRIPS} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.trips) {
  preloadState = windowState 
  
} else {
  preloadState = {}
}

export const tripReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_TRIPS:
      console.log(state.trips,'init');
      return  state.trips,action.payload    
      case ADD_TRIPS:
        return{
          ...state,trips:[...state.trips,action.payload]
        }

      case DELETE_TRIPS:
        console.log(state.trips,'delet');
        return {...state.trips.filter(el=>el._id != action.payload)}
      
    
    default:
      return state;
  }
};

