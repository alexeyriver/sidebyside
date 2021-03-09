import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import Change from "./Change";

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'


function Profile() {

  const user = useSelector(state => state.auth.user)
    const [change, setChange] = useState(false);

  return (
    <Container>
      <h1>Тут будет Profile</h1>
      <div>
          <img src={user.avatar} alt={'AVATAR'}/>
        <p>{user.name}</p>
        <p>{user.email}</p>
          <div>
              {
                  change ?     <Change/> :''
              }
          </div>

          <button onClick={() => setChange(!change)}>Изменить данные</button>
      </div>
    </Container>
  );
}

export default Profile;
