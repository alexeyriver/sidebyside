import React, {useEffect, useRef, useState} from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import {io} from 'socket.io-client';
import {useDispatch, useSelector} from "react-redux";
import {sendMessageAC} from "../../redux/actionCreators";


const SERVER = 'http://localhost:4000';

function Chat() {
    const dispatch = useDispatch()
    const [messageText,setMessageText] = useState('')
    const messages = useSelector(state => state.chats.chats.messages)
    const user = useSelector(state => state.auth.user)
    const userID = user._id
    const chat = useSelector(state=> state.chats.chats)
    const chatID = chat._id

    const socketRef = useRef(null)
 useEffect(() => {

     socketRef.current = io(SERVER,{
         query:{chatID}
     })

     socketRef.current.emit('user:add',{name:user.name,userID})

     socketRef.current.emit('message:get')

     socketRef.current.on('messages',messages => {

     })
 })

    const sendMessage = () => {
        dispatch(sendMessageAC(messageText))

        socketRef.current.emit('message:add',{
            chatID,
            userID,
            messageText,
        })
    }


    return (
        <>
            <div>
                <div>
                    {
                        messages && messages.map(el =>  <ul ><li>{el}</li></ul>)
                    }
                </div>
                <input onChange={(e) => setMessageText(e.target.value)}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>




        </>
    );
}

export default Chat;