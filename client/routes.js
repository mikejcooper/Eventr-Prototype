import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Pages/Home';
import SignupPage from './components/signup/SignupPage';
import SearchPage from './components/searchPage/SearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    	<Route path="signup" component={SignupPage} />
    	<Route path="search" component={SearchPage} />
  </Route>
)
