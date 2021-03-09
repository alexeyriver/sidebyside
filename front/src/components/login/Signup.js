
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH_SUCCESSFULLY } from "../../redux/types";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Signup(props) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handlerSign = (event) => {
    console.log(event.target);
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    console.log(name, email, password)
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
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTH_SUCCESSFULLY, payload: data.user });
          setError('');
        } else setError(data.message);
      });
  };
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
    </Container >
  );
}

export default Signup;
