import React, { useEffect, useState } from 'react';
import {initTripsFetchAC} from '../../redux/Thunk/tripsFetchesAC'
import Profile from '../Profile/Profile'
import { useDispatch, useSelector } from 'react-redux';

import Trips from '../Trips/Trips';

function Cabinet(props) {

   const trips = useSelector(store=>store.trips)
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(initTripsFetchAC()) 
  },[dispatch])

  return (
    <div>
     
     <div><Profile/></div>
     <Trips/>

    </div>
  );
}

export default Cabinet;
