import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App.react';
import Home from './components/Home.react';
import ContactApp from './components/ContactApp.react';
import Profile from './components/Profile.react';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contacts" component={ContactApp} />
      <Route path="/contacts/:username" component={Profile} />
    </Route>
  </Router>
), document.getElementById('contactapp'));
