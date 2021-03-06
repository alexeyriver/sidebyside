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
        <h2>Здесь Вы можете отправить запрос автору</h2>
        <hr />
       <form onSubmit={(e) => { HandlerSubmit(e); console.log(e) }}>
<<<<<<< HEAD
          <input name="text" size="55" placeholder="Предложите автору свою кандидатуру"  ></input>
=======

          <input required name="text"  size="55" placeholder="Предложите автору свою кандидатуру"  ></input>

>>>>>>> 6ba1ba8cf5307b477cfc658d8d0a6feaa14c0ef9
          <button>Отправить запрос</button>
        </form>
      </div>
    </div>
  );
}

export default ModalRequest;
