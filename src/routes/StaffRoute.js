
import { checkAuth } from '../actions';
import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default  ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props => {
        let auth = checkAuth();
        
        if(auth.isLoggedIn && auth.is_staff){
            return <Component {...props} />
        }
        else{
            return <Redirect
                to={{
                    pathname: "/dashboard"
                }}
            />;
        }

    }}
    />
);