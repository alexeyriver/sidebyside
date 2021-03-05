import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Signup(props) {
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    fetch(process.env.REACT_APP_URL2, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.setItem('token', data.token);
          dispatch({ type: 'REG_SUCCESS', payload: data.user });
          setError('');
        } else setError(data.message);
      });
  };
  return (
    <div className="formWrapper">
      <form className="formWrapper__wrapper" onSubmit={handlerSign}>
        <label htmlFor="username">
          Username
        </label>
          <input type="text" name="username" required></input>
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
