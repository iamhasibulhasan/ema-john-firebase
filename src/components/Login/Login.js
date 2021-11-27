import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoggle } = useFirebase();
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
                    onClick={signInUsingGoggle}
                >Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;