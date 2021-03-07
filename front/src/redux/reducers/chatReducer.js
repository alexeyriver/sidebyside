import {SEND_MESSAGE, START_CHAT} from "../types";


const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.chats) {
    preloadState = {
        chats: windowState.chats,
    };

} else {
    preloadState = {chats:[]}
}

export const chatReducer = (state = preloadState, action) => {
    switch (action.type) {
        case START_CHAT:
            return {
                ...state,chats:action.payload
            }
        case SEND_MESSAGE:
            return {
                ...state,chats:{...state.chats.messages,messages:[...state.chats.messages,action.payload]}
            }


        default:
            return state;
    }
};