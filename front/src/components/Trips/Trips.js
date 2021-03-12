import React from "react";
import { BrowserRouter as Router, Link,  } from 'react-router-dom'
// import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'

function Trips() {

  // const trips = useSelector(state => state.tripState.trips)

  return (
    <div className="container">
      <div className="containerCabinet">
        <ul>
          <li><Link to='/mytrips'>Мои созданные поездки</Link></li>
          <li><Link to='/current'>Текущие поездки</Link></li>
          <li><Link to='/past'>Прошедшие поездки</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Trips;
