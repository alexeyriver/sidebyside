import React from 'react';
import { useHistory } from 'react-router-dom';



function MainPage(props) {
  const history = useHistory();


  const findButtonHandler = (event) => {
    event.preventDefault()
    history.push('/findroute')
  }

  const createButtonHandler = (event) => {
    event.preventDefault()
    history.push('/createtrip')
  }


  return (
    <div className="container">
      <div className="mainButtons">
        <ul className="actions">
          <li><a href="#" className="button primary" onClick={findButtonHandler}>Найти маршрут</a></li>
          <li><a href="#" className="button" onClick={createButtonHandler}>Создать маршрут</a></li>
        </ul>
      </div>
    </div>

  );
}

export default MainPage;
