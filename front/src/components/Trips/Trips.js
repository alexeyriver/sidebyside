import React from "react";
import { BrowserRouter as Router, Link,  } from 'react-router-dom'
// import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'

function Trips() {

  // const trips = useSelector(state => state.tripState.trips)

  return (
    <Container>
      <div className="description">
        <ul>
          <li><Link to='/mytrips'>Мною созданные поездки</Link></li>
          <li><Link to='/current'>Текущие поездки</Link></li>
          <li><Link to='/past'>Прошедшие поездки</Link></li>
        </ul>
      </div>

    </Container>
  );
}

export default Trips;
