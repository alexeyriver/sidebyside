import { FROM_CITY_TO_COORDS,FETCH_CREATE_JOURNEY,FETCH_FIND_ALL_JOURNEY } from '../types';

const initialState = {
  fetch: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FROM_CITY_TO_COORDS:
      return {
        ...state, fetchFromCityToCoords: action.payload,
      }; 
      case FETCH_CREATE_JOURNEY:
        return {
          ...state, fetchCreateJourney: action.payload,
        }
        case FETCH_FIND_ALL_JOURNEY:
        return {
          ...state, fetchFindAllJourney: action.payload,
        }
    default: return state;
  }
};


