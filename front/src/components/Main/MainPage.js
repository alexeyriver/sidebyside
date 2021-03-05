import React from 'react';
import {useHistory} from 'react-router-dom'


function MainPage(props) {


findButtonHandler=()=>{
console.log(5)
history.push('/findroute')
}

createButtonHandler=()=>{
  console.log(2)
  history.push('/createroute')
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
