import React from 'react';
import {useSelector} from "react-redux";

function Messages() {
const messages = useSelector(state => state.auth.user.messages)

    return (
        <div>
            {  messages && messages.map(el => <div>
                    <p>{el.author.name}</p>
                    <p>{el.text}</p>
            </div>

            )}
        </div>
    );
}

export default Messages;