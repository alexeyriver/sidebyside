import { FROM_CITY_TO_COORDS } from '../types';

const initialState = {
  fetch: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FROM_CITY_TO_COORDS:
      return {
        ...state, fetch: action.payload,
      };

    default: return state;
  }
};
