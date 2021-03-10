import {addProfilePhotoAC, addProfilePictureAC, changeDataAC, changeErrorAC, initProfileAC} from "../actionCreators";
import axios from "axios";

export const changeInfoFetchAC = (name,email,about,user) => (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/profile/${user._id}`,{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({name,email,about})
    }).then(response => response.json())
        .then(data => dispatch(changeDataAC(data)))

}


export const addProfilePhotoFetchAC = (formData) => (dispatch) => {
    const id = formData.get('id')
    axios.post(`${process.env.REACT_APP_URL}/profile/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then((data) => dispatch(addProfilePhotoAC(data)))

}


export const initProfileFetchAC = (user) => (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/profile/${user._id}`)
        .then((response) => response.json())
        .then((data) => dispatch(initProfileAC(data)));
};