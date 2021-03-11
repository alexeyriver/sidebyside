import { initMessagesAC,  declineMessageAC, acceptMessageAC } from "../actionCreators";
import axios from 'axios';


export const initMessagesFetchAC = (id) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/messages/${id}`)
    .then(response => response.json())
    .then(data => dispatch(initMessagesAC(data)))
}

export const declineResponseAC = (id) => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_USER_REQUEST_TRIP}/decline/${id}`)
  dispatch(declineMessageAC(response.data))
}

export const acceptResponseAC = (el) => async (dispatch) =>{
 const response = await axios.put(`${process.env.REACT_APP_URL}/messages`, {
    id: el._id
  })
  dispatch(acceptMessageAC(response.data))
}
