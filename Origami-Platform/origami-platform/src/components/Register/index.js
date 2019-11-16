import React from 'react';
import './styles.css';

const Register = () => {
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
                <label>Repeat Password</label>
                <input type="password"></input>
            </div>
            <div className="form-control">
                <button type="submit">Register</button>
            </div>
        </form>
    )
};

export default Register;