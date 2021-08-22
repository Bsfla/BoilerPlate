import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../action/user_action';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(authUser())
            .then(response => {
                console.log(response);
            })
        })
    }
    return AuthenticationCheck();
}