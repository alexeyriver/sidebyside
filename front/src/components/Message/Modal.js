import React, {useState} from 'react';
import ReactModal from 'react-modal'
import {useSelector} from "react-redux";


function Modal() {
    const [text,setText] = useState('')
    const author = useSelector(state => state.auth.user._id)
    const recipient = useState('')

    const sendMessage = () => {
        fetch(`${process.env.REACT_APP_URL}/messages`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({text,author,recipient})
        }).then(response => response.json())
            .then(data => console.log(data))
    }


    return (

        <ReactModal
            isOpen={open}
            contentLabel="Minimal Modal Example"
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
            onRequestClose={() => setOpen(false)}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <textarea onChange={(e) => setText(e.target.value) }/>
                <a className="waves-effect blue lighten-4 btn" style={{ marginTop: '5px', marginBottom: '5px', color: '#435467' }} onClick={sendMessage}>Отправить сообщение</a>
            </div>
        </ReactModal>
    );
}

export default Modal;