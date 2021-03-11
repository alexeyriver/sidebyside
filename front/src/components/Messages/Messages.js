import React, {useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

function Messages() {
const messages = useSelector(state => state.auth.user.messages)


    const [response,setResponse] = useState('')


    const confirmHandler = (el) => {
    axios.put(`${process.env.REACT_APP_URL}/messages`,{
       id: el._id
    })

    }

    const declineHandler = () => {

    }


    return (
        <div>
            {  messages && messages.map(el => <div key={performance.now()}>
                    <p style={{fontStyle:'bold'}}>{el.author.name} : {el.text}</p>
                <button  onClick={() => confirmHandler(el)}>Согласиться на поездку</button>
                    <button onClick={declineHandler}>Отказаться</button>
            </div>

            )}
        </div>
    );
}

export default Messages;