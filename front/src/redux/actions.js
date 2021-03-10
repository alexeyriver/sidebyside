import axios from 'axios';
// import { FROM_CITY_TO_COORDS, FETCH_CREATE_JOURNEY, FETCH_FIND_ALL_JOURNEY, FETCH_FIND_QUERY_JOURNEY, FETCH_SUBMIT_CREATED_JOURNEY, FETCH_MODAL_USER_INFO, FETCH_MODAL_USER_REQUEST_TRIP } from './types';
import { cityToCoordAC, createJourneyAC, findAllJourneyAC, findQueryJourneyAC, submitJourneyAC, modalUserInfoAC, modalUserRequestTripAC } from './actionCreators'

export function fetchFromCityToCoordsAC() {
  return async (dispatch) => {
    const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=Лондон');
    dispatch(cityToCoordAC(response.data.response))
  };
}

export function fetchCreateJourneyAC(value) {
  return async (dispatch) => {
    const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${value}`);
    dispatch(createJourneyAC(response.data.response))
  };
}

export function fetchFindAllJourneyAC() {
  return async (dispatch) => {
    const response = await axios.get(process.env.REACT_APP_URL_FIND_ALL_TRIP);
    dispatch(findAllJourneyAC(response.data))
  };
}

export function fetchFindQueryJourneyAC(value) {
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_URL_FIND_ALL_TRIP, {
      coords: value
    });
    dispatch(findQueryJourneyAC(response.data.response))
  };
}

export function fetchSubmitJourneyAC(value) {
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_URL_ADDTRIP, {
      country: value.country,
      budget: value.budget,
      startDate: value.startDate,
      endDate: value.endDate,
      tripInfo: value.tripInfo,
      email: value.email, startCoords: value.startCoords,
      finalCoords: value.finalCoords,
      betweenCoords: value.betweenCoords
    });
    dispatch(submitJourneyAC(response.data))
  };
}



export function fetchModalUserInfoAC(id) {
  return async (dispatch) => {
    const response = await axios.get(`${process.env.REACT_APP_USER_TRIP_PROFILE}/${id}`);
    dispatch(modalUserInfoAC(response.data))
  };
}




export function fetchModalUserRequestTripAC({ text, author, recipient }) {
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_USER_REQUEST_TRIP, {
      text,
      author,
      recipient
    });

    dispatch(modalUserRequestTripAC(response.data))
  };
}
