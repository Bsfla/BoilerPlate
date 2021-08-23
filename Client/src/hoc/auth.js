import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../action/user_action';
import { withRouter } from 'react-router';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(authUser())
            .then(response => {
               console.log(response);
               if (!response.payload.isAuth) { 
                   if(option) props.history.push('/login');
               } else {
                   if (adminRoute && !response.payload.isAdmin) props.history.push('/');
                   else if (!option) props.history.push('/');
               }
            })
        },[]);

        return (
            <SpecificComponent></SpecificComponent>
        )
    }
    return withRouter(AuthenticationCheck);
}