import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInFetchAC } from "../../redux/Thunk/authFetchesAC"
// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Signin(props) {
  const [error, setError] = useState('');
  const [countUseEffect, setCountUseEffect] = useState(0)
  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    dispatch(signInFetchAC({ email, password }))
  };
  let erro = useSelector(state => state.auth)
  useEffect(() => {
    if (countUseEffect > 0 && erro?.authError) {
      setError(erro.authError)
    }
    setCountUseEffect(countUseEffect => countUseEffect = countUseEffect + 1)
  }, [erro])

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="containerCenter">
      <form className="formWrapper__wrapper" onSubmit={handlerSign}>
        <label htmlFor="email">
          Email:
        </label>
        <input type="email" name="email" required></input>
        <label htmlFor="password">
          Пароль:
        </label>
        <input type="password" name="password" required></input>
        <div className="error">{error}</div>
        <button>Войти на сайт</button>
      </form>
      </div>
    </div>
  );
}

export default Signin;
