import React from 'react';
import { useSelector } from 'react-redux';

function Profile(props) {

  const user = useSelector(state => state.auth.user)


  return (
    <div>
      <h1>Тут будет Profile</h1>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
