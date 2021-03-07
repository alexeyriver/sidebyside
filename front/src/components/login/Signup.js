import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AUTH_SUCCESSFULLY} from "../../redux/types";

function Signup(props) {
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
<<<<<<< HEAD
      username: { value: name },
=======
      name: { value: name },
>>>>>>> 603b3275e3156030ce699624e8e6265901d47bcf
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
<<<<<<< HEAD
=======
    console.log(name,email,password)
>>>>>>> 603b3275e3156030ce699624e8e6265901d47bcf
    fetch(process.env.REACT_APP_URL_SIGNUP, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTH_SUCCESSFULLY, payload: data.user });
          setError('');
        } else setError(data.message);
      });
  };
  return (
    <div className="formWrapper">
      <form className="formWrapper__wrapper" onSubmit={handlerSign}>
        <label htmlFor="name">
          Name
        </label>
          <input type="text" name="name" required></input>
        <label htmlFor="email">
          Email
        </label>
          <input type="email" name="email" required></input>
        <label htmlFor="password">
          Password
        </label>
          <input type="password" name="password" required></input>
        <div className="error">{error}</div>
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
