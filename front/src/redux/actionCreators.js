
import {
  INIT_MESSAGES,
  SEND_MESSAGE,
  INIT_TRIPS,
  DELETE_TRIPS,
  ADD_TRIPS,
  EDIT_MY_TRIP,
  CHANGE_DATA,
  CHANGE_ERROR,
  ADD_PROFILE_PICTURE,
  INIT_PROFILE,
  AUTH_ERROR,
  AUTH_SUCCESSFULLY,
  SIGNUP_SUCCESSFULLY,
  FROM_CITY_TO_COORDS,
  FETCH_CREATE_JOURNEY,
  FETCH_FIND_ALL_JOURNEY,
  FETCH_FIND_QUERY_JOURNEY,
  FETCH_SUBMIT_CREATED_JOURNEY,
  FETCH_MODAL_USER_INFO,
  FETCH_MODAL_USER_REQUEST_TRIP

} from "./types";

//AUTH
export const addProfilePhotoAC = (data) => ({ type: ADD_PROFILE_PICTURE, payload: data })
export const changeDataAC = (payload) => ({ type: CHANGE_DATA, payload })
export const changeErrorAC = (payload) => ({ type: CHANGE_ERROR, payload })
export const initProfileAC = (payload) => ({ type: INIT_PROFILE, payload })

export const authErrorAC = (payload) => ({ type: AUTH_ERROR, payload })
export const authSuccessfullyAC = (payload) => ({ type: AUTH_SUCCESSFULLY, payload })
export const signupSuccessfullyAC = (payload) => ({ type: SIGNUP_SUCCESSFULLY, payload })


//
export const cityToCoordAC = (payload) => ({ type: FROM_CITY_TO_COORDS, payload })
export const createJourneyAC = (payload) => ({ type: FETCH_CREATE_JOURNEY, payload })
export const findAllJourneyAC = (payload) => ({ type: FETCH_FIND_ALL_JOURNEY, payload })
export const findQueryJourneyAC = (payload) => ({ type: FETCH_FIND_QUERY_JOURNEY, payload })
export const submitJourneyAC = (payload) => ({ type: FETCH_SUBMIT_CREATED_JOURNEY, payload })
export const modalUserInfoAC = (payload) => ({ type: FETCH_MODAL_USER_INFO, payload })
export const modalUserRequestTripAC = (payload) => ({ type: FETCH_MODAL_USER_REQUEST_TRIP, payload })



//CHAT

export const sendMessageAC = (payload) => ({type: SEND_MESSAGE, payload});
export const initMessagesAC = (payload) => ({type:INIT_MESSAGES,payload})





//TRIPS
export const initTripsAC = (data) => ({ type: INIT_TRIPS, payload: data })
export const deleteTripAC = (data) => ({ type: DELETE_TRIPS, payload: data })
export const addTripAC = (payload) => ({ type: ADD_TRIPS, payload })
export const editMyTripAC = (payload) => ({ type: EDIT_MY_TRIP, payload })



