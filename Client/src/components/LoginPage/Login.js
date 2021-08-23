import React, { useState } from 'react';
import { loginUser } from '../../action/user_action';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';



const Login = (props) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onChange = (event) => {
        const {name, value} = event.target;
        if (name === 'id') setId(value);
        else setPassword(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email : id,
            password 
        }
        
        dispatch(loginUser(body))
        .then(response => {
            console.log(response);
            if (response.payload.loginSuccess) {
                props.history.push('/');
            } else alert(response.payload.message);
        })
        
      

        
    }

    return (
        <div className="LoginBlock">
            <h1>Login</h1>
            <form className="loginform" onSubmit={onSubmit}>
                <div className="txt_field">
                    <input type="text" name="id" value={id} onChange={onChange} required/>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" name="password" value={password} onChange={onChange} required />
                    <label>Password</label>
                </div>
                <div>
                    <span>Create Account</span>
                </div>
                <div className="Login">
                    <button className="loginBtn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);