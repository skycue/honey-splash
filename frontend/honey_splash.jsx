import React from 'react';
import ReactDOM from 'react-dom';

import {login, logout, signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  // login({username: "u1", password: "111111"});

  ReactDOM.render(<h1>Welcome to HoneySplash</h1>, root);
})
