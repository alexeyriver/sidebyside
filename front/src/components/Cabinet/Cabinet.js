import React, { useEffect } from 'react';
import {initTripsFetchAC} from '../../redux/Thunk/tripsFetchesAC'
import Trips from '../Trips/Trips'
import Profile from '../Profile/Profile'
import { useDispatch } from 'react-redux';

function Cabinet(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(initTripsFetchAC()) 
  },[])
  return (
    <div>
     <div><Profile/></div>
     <div><Trips/></div>
      
    </div>
  );
}

export default Cabinet;
