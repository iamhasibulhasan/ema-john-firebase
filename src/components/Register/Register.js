import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register a new account</h2>
                <form anSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Type Password" id="" />
                    <br />
                    <input type="password" name="" placeholder="Re-type Password" id="" />
                    <br />
                    <input type="submit" value="Submit" className="btn-regular" />
                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;