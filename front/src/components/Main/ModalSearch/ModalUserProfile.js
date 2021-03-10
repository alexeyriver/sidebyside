import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

function ModalUserProfile(props) {
const dispatch = useDispatch()
 
const user = useSelector(store => store.fetch.fetchModalUserInfo)
// console.log(user);

  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>HI</h2>
        <hr />
     <p>User:  {user.name}</p> 

       HI again
      </div>
    </div>
  );
}

export default ModalUserProfile;
