import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import Root from './components/root';
// import {login, logout, signup} from './util/session_api_util'
import { login, logout, signup } from './actions/session_actions';
import { createList, removeList } from './util/list_api_util'; //For testing


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    window.store = store; //For testing
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.createList = createList;
  window.removeList = removeList;

  ReactDOM.render(<Root store={store}/>, root);
})
