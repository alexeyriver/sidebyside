import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from "../../redux/types";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

function Logout(props) {
  const dispatch = useDispatch()
  dispatch({ type: LOGOUT })
  let history = useHistory()
  history.push('/')
  return (
    <div>

    </div>
  );
}

export default Logout;
