import React from 'react';
// import { Route } from 'react-router-dom'; //May not need anymore because of Authroute
// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
// import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Session from './session/session';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <Modal/>
    <Route exact path="/" component={GreetingContainer}/>
    <Route exact path="/login" component={Session}/>
    <Route exact path="/signup" component={Session}/>
  </div>
);

export default App;
