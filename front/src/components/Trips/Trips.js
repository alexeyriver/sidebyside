import React from "react";
import { BrowserRouter as Router, Link,  } from 'react-router-dom'
// import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'

function Trips() {

  // const trips = useSelector(state => state.tripState.trips)

  return (
    <div className="container">
      <div className="containerCabinet">
        <div className="gorizont">
          <div><Link to='/mytrips'>Cозданные поездки</Link></div>
          <div><Link to='/current'>Текущие поездки</Link></div>
          <div><Link to='/past'>Прошедшие поездки</Link></div>
        </div>
      </div>

    </div>
  );
}

export default Trips;
