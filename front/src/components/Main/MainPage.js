import React from 'react';
import {useHistory} from 'react-router-dom'
import MainMap from '../Map/MainMap'

function MainPage(props) {

const history = useHistory()

const findButtonHandler=(event)=>{
  event.preventDefault()
console.log(5)
history.push('/findroute')
}

const createButtonHandler=(event)=>{
  event.preventDefault()
  console.log(2)
  history.push('/createjourney')
}

  return (

    <>
    <MainMap />
    <div style={{paddingTop:'100px'}}>
      <button onClick={findButtonHandler} type='button' name='find'>Найти маршрут</button>
      <button onClick={createButtonHandler} type='button' name='create'>Создать маршрут</button>
    </div>
      
    </>
  );
}

export default MainPage;
