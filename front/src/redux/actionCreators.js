//AUTH

//CHAT
import {SEND_MESSAGE, START_CHAT} from "./types";

export const startChatAC = (data) => ({type:START_CHAT,payload:data})
export const sendMessageAC = (payload) => ({type: SEND_MESSAGE, payload});