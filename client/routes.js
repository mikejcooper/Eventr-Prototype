import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/pages/home/Home';
import SignupPage from './components/signup/SignupPage';
import SearchPage from './components/pages/search/SearchPage';
import EventPage from './components/pages/event/Event';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignupPage} />
    <Route path="search" component={SearchPage} />
    <Route path="e:id" component={EventPage} />
  </Route>
)
