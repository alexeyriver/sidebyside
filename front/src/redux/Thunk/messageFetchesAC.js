import {initMessagesAC, initSenderAC} from "../actionCreators";


export const initMessagesFetchAC = (id) => (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/messages/${id}`)
        .then(response => response.json())
        .then(data => dispatch(initMessagesAC(data)))
}

