import React, { useDebugValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Change from "./Change";

// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import { initProfileFetchAC } from "../../redux/Thunk/authFetchesAC";


function Profile() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const [change, setChange] = useState(false);
  useEffect(() => {
    dispatch(initProfileFetchAC(user));
  }, [user.name, user.email, user.about]);

  return (
    <div className="container ">
      <div  >
        <div className='profileEl'>
        <img src={user.file} alt={'AVATAR'} style={{ height: '200px', minWidth: '300px' }} />
        </div>
        <div className="containerCabinet ">
          <div className='profileEl'>Имя пользователя: <b>{user.name}</b></div>
          <div className='profileEl'>Адрес почты: <b>{user.email}</b></div>
          <div className='profileEl'>О себе: <b>{user.about}</b></div>
          <div >
            {change ? <Change /> : ''}
          </div>
          <div className="">
            <button className='buttonContainer' onClick={() => setChange(!change)}>Изменить данные</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
