import React, { useState } from "react";
import MyTrips from '../Trips/MyTrips';
import CurrentTrips from '../Trips/CurrentTrips'
import PastTrips from '../Trips/PastTrips'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Trips() {

  const trips = useSelector(state => state.tripState.trips)

  return (
    <Container>
      <h1>Поездки</h1>
      <Router>
        <ul>
          <li><Link to='/mytrips'>Мною созданные поездки</Link></li>
          <li><Link to='/current'>Текущие поездки</Link></li>
          <li><Link to='/past'>Прошедшие поездки</Link></li>
        </ul>
        <Switch>
          <Route path='/mytrips'>
            <MyTrips />
          </Route>
          <Route path='/current'>
            <CurrentTrips />
          </Route>
          <Route path='/past'>
            <PastTrips />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default Trips;
