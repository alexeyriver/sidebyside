import React, { useEffect, useState } from 'react';
import { initTripsFetchAC } from '../../redux/Thunk/tripsFetchesAC'
import Profile from '../Profile/Profile'
import { useDispatch, useSelector } from 'react-redux';
import Trips from '../Trips/Trips';
import Messages from "../Messages/Messages";
import { initMessagesFetchAC } from "../../redux/Thunk/messageFetchesAC";

function Cabinet(props) {
  const trips = useSelector(state => state.tripState.trips)
  const id = useSelector(state => state.auth.user._id)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(initTripsFetchAC())
    dispatch(initMessagesFetchAC(id))
  }, [dispatch])

  return (
    <div>
      <div><Profile /></div>
      <Trips trips={trips} />
      <div><Messages /></div>
    </div>
  );
}

export default Cabinet;
