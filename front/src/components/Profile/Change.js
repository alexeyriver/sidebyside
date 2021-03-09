import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeInfoFetchAC} from '../../redux/Thunk/authFetchesAC'

function Change() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.changeError);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);


    const changeHandler = (event) => {
        event.preventDefault();
        dispatch(changeInfoFetchAC(name, email, user));
    };

    const onFileChange = () => {

    }
    return (
        <div>
            <form onSubmit={changeHandler}>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Изменить имя"/>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Изменить почту"/>
                <input type="file" name="file" onChange={onFileChange}/>
                <button>Записать</button>
            </form>
            <div>{error}</div>
        </div>

    );
}

export default Change;
