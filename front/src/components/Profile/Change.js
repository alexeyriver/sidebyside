import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addProfilePhotoFetchAC, changeInfoFetchAC} from '../../redux/Thunk/authFetchesAC'

function Change() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.changeError);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [about,setAbout] = useState(user.about)
    const [pic,setPic] = useState({file:''})


    const onFileChange = (e) => {
        setPic({ file: e.target.files[0] });
    };

    const changeInfoHandler = (e) => {
        e.preventDefault()
        dispatch(changeInfoFetchAC(name,email,about,user))
    }



    const profilePhotoHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', pic.file);
        formData.append('id', user._id)
        dispatch(addProfilePhotoFetchAC(formData));
    };


    return (<div>
            <form onSubmit={changeInfoHandler}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Изменить имя"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Изменить почту"/>
                <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Изменить информацию о себе"/>
                <button  type='submit'>Записать</button>
            </form>

            <form onSubmit={profilePhotoHandler}>
                <input type="file" name="file" onChange={onFileChange}/>
                <button type='submit'>Записать</button>
            </form>
           {/* <div>{error}</div> */}
        </div>

    );
}

export default Change;
