import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchModalUserRequestTripAC } from '../../../redux/actions';

function ModalRequest(props) {
  const dispatch = useDispatch()
  const author = useSelector(store => store.auth.user)
  const HandlerSubmit = (e) => {
    e.preventDefault()
    const { text: { value: text } } = e.target
    dispatch(fetchModalUserRequestTripAC({ text, author, recipient: props.props.author, trip: props.props }))    
    props.onModalClose()
  }
  
  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>HI</h2>
        <hr />

       HI again modal request
       <form onSubmit={(e) => { HandlerSubmit(e); console.log(e) }}>
          <input required name="text" placeholder="Предложите автору свою кандидатуру, опишите вашу поезку"  ></input>
          <button>Отправить запрос</button>
        </form>
      </div>
    </div>
  );
}

export default ModalRequest;
