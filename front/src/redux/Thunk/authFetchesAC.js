import { addProfilePhotoAC, addProfilePictureAC, changeDataAC, changeErrorAC, initProfileAC, authErrorAC,authSuccessfullyAC, signupSuccessfullyAC } from "../actionCreators";
import axios from "axios";

export const changeInfoFetchAC = (name, email, about, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/profile/${user._id}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ name, email, about })
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




export const signInFetchAC = ({ email, password }) => async (dispatch) => {
  const response = await axios.post(process.env.REACT_APP_URL_SIGNIN, {
    email,
    password
  })

  if (response.data.success === true) {
    dispatch(authSuccessfullyAC(response.data.user ))
  }
  else if (response.data.message == 'Пароли не совпали') {
    dispatch(authErrorAC(response.data.message)) 

  }
  else if (response.data.message == 'Пользователь не найден') {
    dispatch(authErrorAC(response.data.message)) 

  }
}

export const signUpFetchAC = ({ name, email, password }) => async (dispatch) => {
  const response = await axios.post(process.env.REACT_APP_URL_SIGNUP, {
    name,
    email,
    password
  })
  if (response.data.success === true) {
    dispatch(signupSuccessfullyAC(response.data ))
  }
  else if (response.data.message == 'Такой пользователь уже есть') {
    dispatch(authErrorAC(response.data.message)) 
  }
}
