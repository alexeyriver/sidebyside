import React from 'react';
import { useSelector } from "react-redux"

function ModalUserProfile(props) {

const user = useSelector(store => store.fetch.fetchModalUserInfo)

  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>HI</h2>
        <hr />
     <p>User:  {user?.name}</p> 

       HI again
      </div>
    </div>
  );
}

export default ModalUserProfile;
