import React from 'react';
import { useDispatch } from 'react-redux';

function Logout(props) {
    const dispatch = useDispatch()
    dispatch({type:'LOGOUT'})
    return (
        <div>
            
        </div>
    );
}

export default Logout;
