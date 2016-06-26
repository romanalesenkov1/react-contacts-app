import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App.react';
import Home from './components/Home.react';
import ContactApp from './components/ContactApp.react';
import Profile from './components/Profile.react';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contacts" component={ContactApp} />
      <Route path="/contacts/:username" component={Profile} />
    </Route>
  </Router>
), document.getElementById('contactapp'));
