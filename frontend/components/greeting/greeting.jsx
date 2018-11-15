import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    // <nav className="login-signup">
      <Redirect to="/login" />
      // &nbsp;or&nbsp;
      // <Link to="/signup">Sign up!</Link>
    // </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();

  // if (currentUser) {
  //   return personalGreeting();
  // } else {
  //   return (<Redirect to="/" />);
  // }
};


export default Greeting;
