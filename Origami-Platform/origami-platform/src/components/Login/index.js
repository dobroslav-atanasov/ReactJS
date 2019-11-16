import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <form>
            <div className="form-control">
                <label>Email</label>
                <input type="email"></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div className="form-control">
                <button type="submit">Login</button>
            </div>
        </form>
    )
};

export default Login;