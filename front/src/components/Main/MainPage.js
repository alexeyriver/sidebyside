import React from 'react';
import {useHistory} from 'react-router-dom'


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
    <div>
      <button onClick={findButtonHandler} type='button' name='find'>Найти маршрут</button>
      <button onClick={createButtonHandler} type='button' name='create'>Создать маршрут</button>
    </div>
      
    </>
  );
}

export default MainPage;
