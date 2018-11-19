import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ListSidebar from '../dropdown/list_sidebar';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
      <Redirect to="/login" />
  );

  const personalGreeting = () => (
    <div className="main-page">

      <header className="main-nav">
        <nav className="left-nav">
          <ListSidebar/>
        </nav>

        <nav className="right-nav">
          <ul>
            <li>
              <button className="logout-button" onClick={logout}>Log Out</button>
            </li>
            <li className="gear-dropdown-btn">
              <i className="fas fa-cog"></i>
            </li>
          </ul>
        </nav>
      </header>

      <div className="main-content">

      </div>

    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();

};

// <hgroup className="header-group">
//   <h2 className="header-name">Hi, {currentUser.username}!</h2>
// </hgroup>



export default Greeting;
