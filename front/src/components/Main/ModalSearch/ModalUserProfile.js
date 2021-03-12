import React from 'react';
import { useSelector } from "react-redux"

function ModalUserProfile(props) {

  const user = useSelector(store => store.fetch.fetchModalUserInfo)

  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>Профиль автора</h2>
        <hr />
        <p><strong> User: </strong>  {user?.name}</p>
        <p><strong>About User: </strong> {user?.about} </p>
      </div>
    </div>
  );
}

export default ModalUserProfile;
