import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeInfoFetchAC} from '../../redux/Thunk/authFetchesAC'

function Change() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.changeError);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [pic,setPic] = useState({file:''})


    const onFileChange = (e) => {
        setPic({ file: e.target.files[0] });
    };

    const changeHandler = (event) => {
        event.preventDefault();
        const {
            name:{value:name},
            email:{value:email},
            } = event.target
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('file', pic.file);
        formData.append('id', user._id);
        dispatch(changeInfoFetchAC(formData));
    };


    return (
        <div>

            <form onSubmit={changeHandler}>

                <input name="name" onChange={(e) => setName(e.target.value)} placeholder="Изменить имя"/>
                <input name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Изменить почту"/>

                <input type="file" name="file" onChange={onFileChange}/>
                <button type='submit'>Записать</button>
            </form>
           <div>{error}</div>
        </div>

    );
}

export default Change;
