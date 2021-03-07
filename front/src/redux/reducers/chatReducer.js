import {START_CHAT} from "../types";


const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.chats) {
    preloadState = {

    };
} else {
    preloadState = {chat:null};
}

export const chatReducer = (state = preloadState, action) => {
    switch (action.type) {
        case START_CHAT:
            return {
                ...state,chat:action.payload
            }


        default:
            return state;
    }
};