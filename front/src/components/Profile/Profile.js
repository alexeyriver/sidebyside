import React, {useDebugValue, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Change from "./Change";

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import {initProfileFetchAC} from "../../redux/Thunk/authFetchesAC";


function Profile() {

const dispatch = useDispatch()

  const user = useSelector(state => state.auth.user)
    const [change, setChange] = useState(false);
    useEffect(() => {
        dispatch(initProfileFetchAC(user));
    }, [user.name, user.email,user.about]);

  return (
    <Container>
      <h1>Тут будет Profile</h1>
      <div>
          <img src={user.file} alt={'AVATAR'} style={{maxHeight:'300px',maxWidth:'300px'}}/>
        <p>{user.name}</p>
        <p>{user.email}</p>
          <p>{user.about}</p>
          <div>
              { change ?    <Change/> : '' }
          </div>

          <button onClick={() => setChange(!change)}>Изменить данные</button>
      </div>
    </Container>
  );
}

export default Profile;
