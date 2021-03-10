
import {
    SEND_MESSAGE,
    INIT_TRIPS,
    DELETE_TRIPS,
    ADD_TRIPS,
    EDIT_MY_TRIP,
    CHANGE_DATA,
    CHANGE_ERROR,
    ADD_PROFILE_PICTURE,
    INIT_PROFILE, INIT_MESSAGES, INIT_SENDER
} from "./types";

//AUTH
export const addProfilePhotoAC = (data) => ({type:ADD_PROFILE_PICTURE,payload:data})
export const changeDataAC = (payload) => ({type:CHANGE_DATA,payload})
export const changeErrorAC = (payload) => ({type:CHANGE_ERROR,payload})
export const initProfileAC = (payload) => ({type:INIT_PROFILE,payload})

//CHAT

export const sendMessageAC = (payload) => ({type: SEND_MESSAGE, payload});
export const initMessagesAC = (payload) => ({type:INIT_MESSAGES,payload})


//TRIPS
export const initTripsAC = (data)=>({type:INIT_TRIPS,payload:data})
export const deleteTripAC = (data)=>({type:DELETE_TRIPS,payload:data})
export const addTripAC = (payload) => ({type:ADD_TRIPS,payload})
export const editMyTripAC = (payload) =>({type:EDIT_MY_TRIP,payload})



