import { FROM_CITY_TO_COORDS, FETCH_CREATE_JOURNEY, FETCH_FIND_ALL_JOURNEY, FETCH_FIND_QUERY_JOURNEY, FETCH_SUBMIT_CREATED_JOURNEY, FETCH_MODAL_USER_INFO } from '../types';

const initialState = {};
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
    case FETCH_FIND_QUERY_JOURNEY:
      return {
        ...state, fetchFindQueryJourney: action.payload,
      }
    case FETCH_SUBMIT_CREATED_JOURNEY:
      return {
        ...state, fetchSubmitJourney: action.payload,
      }
      case FETCH_MODAL_USER_INFO:
        return {
          ...state, fetchModalUserInfo: action.payload,
        }

    default: return state;
  }
};


