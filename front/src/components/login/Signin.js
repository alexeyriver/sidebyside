import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AUTH_SUCCESSFULLY} from "../../redux/types";

function Signin(props) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    fetch(process.env.REACT_APP_URL_SIGNIN, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.success === true) {
          dispatch({ type: AUTH_SUCCESSFULLY, payload: data.user });
          setError('');
        } else setError(data.message);
      });
  };
  console.log(error);
  return (
    <div className="formWrapper">
      <form className="formWrapper__wrapper" onSubmit={handlerSign}>
        <label htmlFor="email">
          Email
        </label>
          <input type="email" name="email" required></input>
        <label htmlFor="password">
          Password
        </label>
          <input type="password" name="password" required></input>
        <div className="error">{error}</div>
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Signin;
