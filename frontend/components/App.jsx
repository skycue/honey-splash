import React from 'react';
// import { Route } from 'react-router-dom'; //May not need anymore because of Authroute
// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
// import { AuthRoute } from '../util/route_util';
import Session from './session/session';

const App = () => (
  <div className="app">
    <Session />
  </div>
);

export default App;
