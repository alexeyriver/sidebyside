import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {LOGOUT} from "../../redux/types";

function Logout(props) {
    const dispatch = useDispatch()
    dispatch({type:LOGOUT})
    return (
        <div>
            
        </div>
    );
}

export default Logout;
