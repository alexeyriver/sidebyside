import {startChatAC} from "../actionCreators";

export const chatCreatorFetchAC = (userID) => (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/chat`,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({userID})
    }).then(response => response.json())
        .then(data => dispatch(startChatAC(data)))
}