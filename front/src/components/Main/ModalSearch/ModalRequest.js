import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

function ModalRequest(props) {
const dispatch = useDispatch()
 

  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>HI</h2>
        <hr />
        
       HI again modal request
       <form onSubmit={(e) => { console.log(e) }}>
          <input name="request" placeholder="Предложите автору свою кандидатуру, опишите вашу поезку"  ></input>
          <button>Отправить запрос</button>
        </form>
      </div>
    </div>
  );
}

export default ModalRequest;
