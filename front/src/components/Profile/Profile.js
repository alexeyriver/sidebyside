import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Profile(props) {

  const user = useSelector(state => state.auth.user)


  return (
    <Container>
      <h1>Тут будет Profile</h1>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </Container>
  );
}

export default Profile;
