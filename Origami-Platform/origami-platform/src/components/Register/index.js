import React from 'react';
import './styles.css';
// import withForm from '../Shared/WithForm';
import userService from '../../services/user-service';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            isRedirected: false
        };
    };

    // usernameChangeHandler = this.props.changeHandlerFactory('username');
    // passwordChangeHandler = this.props.changeHandlerFactory('password');
    // repeatPasswordChangeHandler = this.props.changeHandlerFactory('repeatPassword');

    submitHandler = (e, history) => {
        e.preventDefault();
        const data = this.state;
        userService.register(data).then(() => {
            this.setState({ isRedirected: true });
        });
    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    };

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    };

    repeatPasswordChangeHandler = (e) => {
        this.setState({ repeatPassword: e.target.value });
    };

    render() {
        return (
            this.state.isRedirected ? <Redirect to="/login" /> :
                <form onSubmit={this.submitHandler}>
                    <div className="form-control">
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.usernameChangeHandler}></input>
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.passwordChangeHandler}></input>
                    </div>
                    <div className="form-control">
                        <label>Repeat Password</label>
                        <input type="password" value={this.state.repeatPassword} onChange={this.repeatPasswordChangeHandler}></input>
                    </div>
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                </form>
        )
    }
}

export default Register;

// const initialState = {
//     username: '',
//     password: '',
//     repeatPassword: ''
// }

// export default withForm(Register, initialState);