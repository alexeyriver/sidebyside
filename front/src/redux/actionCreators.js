import {SEND_MESSAGE, INIT_TRIPS, DELETE_TRIPS, ADD_TRIPS, CHANGE_DATA, CHANGE_ERROR} from "./types";
//AUTH

export const changeDataAC = (payload) => ({type:CHANGE_DATA,payload})
export const changeErrorAC = (payload) => ({type:CHANGE_ERROR,payload})

//CHAT

export const sendMessageAC = (payload) => ({type: SEND_MESSAGE, payload});

//TRIPS
export const initTripsAC = (data)=>({type:INIT_TRIPS,payload:data})
export const deleteTripAC = (data)=>({type:DELETE_TRIPS,payload:data})
export const addTripAC = (payload) => ({type:ADD_TRIPS,payload})

