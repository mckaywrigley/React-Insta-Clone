import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    loginInputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <div className="login-form">
                <form>
                    <div className="form-item">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={this.loginInputHandler}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-item">
                        <label>Password</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            onChange={this.loginInputHandler}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-item">
                        <button
                            onClick={this.handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }   
}

export default Login;