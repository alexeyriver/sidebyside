import React, { useEffect } from 'react';
import {initTripsFetchAC} from '../../redux/Thunk/tripsFetchesAC'
import Trips from '../Trips/Trips'
import Profile from '../Profile/Profile'
import { useDispatch, useSelector } from 'react-redux';

function Cabinet(props) {

   const trips = useSelector(store=>store.trips)

  const dispatch = useDispatch()
  useEffect(()=>{
    
   dispatch(initTripsFetchAC()) 
  },[])
  console.log(trips);
  return (
    <div>
     <div><Profile/></div>
     <div><Trips ownTrips={trips}/></div>
      
    </div>
  );
}

export default Cabinet;
