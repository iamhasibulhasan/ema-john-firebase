import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useAuth from './../../hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";
const Login = () => {

    let history = useHistory();
    const { user, signInUsingGoggle } = useAuth();
    const location = useLocation();
    console.log('Came from', location.state?.from);
    let redirect_uri = location.state?.from || '/';

    // TODO: Redirect Path
    const handleGoogleLogin = () => {
        signInUsingGoggle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>--------------or----------------</div>
                <button className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;