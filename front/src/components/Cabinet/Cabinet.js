import React from 'react';
import Trips from '../Trips/Trips'
import Profile from '../Profile/Profile'

function Cabinet(props) {
  return (
    <div>
     <div><Profile/></div>
     <div><Trips/></div>
      
    </div>
  );
}

export default Cabinet;
