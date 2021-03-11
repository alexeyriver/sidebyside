import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { declineResponseAC, acceptResponseAC } from '../../redux/Thunk/messageFetchesAC';

function Messages() {
  const messages = useSelector(state => state.auth.user.messages)
  const dispatch = useDispatch()
  const [response, setResponse] = useState('')
  useEffect(() => {
    setResponse(messages)
  }, [messages])
  const confirmHandler = (el) => {
    dispatch(acceptResponseAC(el))
  }
  const declineHandler = (el) => {
    dispatch(declineResponseAC(el._id))
  }

  return (

    <div>
      {  response && response.map(el => <div key={el._id}>
        <p style={{ fontStyle: 'bold' }}>{el.author?.name} : {el?.text}</p>
        <button onClick={() => confirmHandler(el)}>Согласиться на поездку</button>
        <button onClick={() => declineHandler(el)}>Отказаться</button>
      </div>
      )}
    </div>
  );

}


export default Messages;

