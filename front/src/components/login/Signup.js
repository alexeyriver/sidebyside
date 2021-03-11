
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_SUCCESSFULLY } from "../../redux/types";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import { signUpFetchAC } from '../../redux/Thunk/authFetchesAC'

function Signup(props) {
  const [error, setError] = useState('');
  const [countUseEffect, setCountUseEffect] = useState(0)

  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    dispatch(signUpFetchAC({ name, email, password }))
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
      <div className="description">
        <form onSubmit={handlerSign}>
          <Row>
            <Col>
              <label>Email:
              <input type="email" name="email" placeholder="Введите email" required />
              </label>
            </Col>
            <Col>
              <label>Пароль:
              <input type="password" name="password" placeholder="Введите пароль" required />
              </label>
            </Col>
          </Row>

          <Row>
            <Col>
              <label>Ваше имя:
            <input type="text" name="name" placeholder="Введите имя" required />
              </label>
            </Col>
          </Row>
          <Button variant='secondary' type="submit" >Зарегистрироваться</Button>

        </form >

      </div>

      <div className="error">{error}</div>
    </div >
  );
}

export default Signup;
