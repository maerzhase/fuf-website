'use strict'

import React from 'react';
import { Route,  IndexRoute } from 'react-router';
import App from './App';
import RouteHome from './RouteHome';
import Route404 from './Route404';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RouteHome}/>
    <Route path="/:section/:state" component={RouteHome}/>
    <Route path="/:section" component={RouteHome}/>
  </Route>
)

export default routes;