import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Change from "./Change";

function Profile() {

  const user = useSelector(state => state.auth.user)
    const [change, setChange] = useState(false);

  return (
    <div>
      <h1>Тут будет Profile</h1>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
          <div>
              {
                  change ?     <Change/> :''
              }
          </div>

          <button onClick={() => setChange(!change)}>Изменить данные</button>
      </div>
    </div>
  );
}

export default Profile;
