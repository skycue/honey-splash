import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
      <Redirect to="/login" />
  );

  const personalGreeting = () => (
    <header className="main-nav">
      <nav className="left-nav"></nav>
      <nav className="right-nav">
        <button className="logout-button" onClick={logout}>Log Out</button>
      </nav>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();

};

// <hgroup className="header-group">
//   <h2 className="header-name">Hi, {currentUser.username}!</h2>
// </hgroup>



export default Greeting;
