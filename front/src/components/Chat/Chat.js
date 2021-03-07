import React, {useEffect, useRef, useState} from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import io from 'socket.io-client';
import {useDispatch, useSelector} from "react-redux";
import {startChatAC} from "../../redux/actionCreators";

const SERVER = 'http://localhost:4000';

function Chat() {
    const dispatch = useDispatch()

    const userID = useSelector(state => state.auth.user._id)
    const chatID = useSelector(state=> state.chats.chat._id)

    console.log(chatID)


    const chatCreator = () => {
        fetch(`${process.env.REACT_APP_URL}/chat`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({userID})
        }).then(response => response.json())
            .then(data => dispatch(startChatAC(data)))
    }

    useEffect(() => {
        chatCreator()
    },[])



    const socketRef = useRef(null)
 useEffect(() => {

     socketRef.current = io(SERVER,{
         query:{chatID }
     })
 })


    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

export default Chat;