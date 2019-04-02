import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/authentication/Authentication';
import Login from './components/LoginPage/Login';

const ComponenentFromAuthenticate = Authenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ComponenentFromAuthenticate />
    );
  }
}

export default App;
