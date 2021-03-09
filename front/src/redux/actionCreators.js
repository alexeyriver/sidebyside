import {SEND_MESSAGE, START_CHAT, INIT_TRIPS, DELETE_TRIPS, ADD_TRIPS} from "./types";
//AUTH

//CHAT

export const startChatAC = (data) => ({type:START_CHAT,payload:data})
export const sendMessageAC = (payload) => ({type: SEND_MESSAGE, payload});

//TRIPS
export const initTripsAC = (data)=>({type:INIT_TRIPS,payload:data})
export const deleteTripAC = (data)=>({type:DELETE_TRIPS,payload:data})
export const addTripAC = (payload) => ({type:ADD_TRIPS,payload})
