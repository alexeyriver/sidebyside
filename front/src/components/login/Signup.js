
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
    <Container style={{ textAlign: "center" }}>

      <Form onSubmit={handlerSign}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Имя:</Form.Label>
              <Form.Control type="text" name="name" placeholder="Введите имя" />
              {/* <Form.Text className="text-muted"> */}
              {/* Your email is secret
    </Form.Text> */}
            </Form.Group>
          </Col>

          <Col>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Введите email" />
              {/* <Form.Text className="text-muted"> */}
              {/* Your email is secret
    </Form.Text> */}
            </Form.Group>
          </Col>
          <Col>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" placeholder="Введите пароль" />
              {/* <Form.Text className="text-muted">
            Your password is secret
    </Form.Text> */}
            </Form.Group>
          </Col>

        </Row>
        <Button variant='secondary' type="submit" >Зарегистрироваться</Button>

      </Form>
      <div className="error">{error}</div>
    </Container >
  );
}

export default Signup;
