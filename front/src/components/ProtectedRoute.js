import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from "react";

const ProtectedRouter = ({ Component, path, ...rest }) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    return (
        <Route path={path} {...rest}>
            {isAuth ? <Component/> : <Redirect to='/'/>}
        </Route>
    );
};
export default ProtectedRouter;
