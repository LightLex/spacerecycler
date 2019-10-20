import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import * as ROUTES from './components/navigation/routes';
import Navigation from './components/navigation';
import HomePage from './components/home';
import GamePage from './components/game';
import {SignUpForm} from './components/sign_up';
import { withAuthentication } from './components/session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Redirect exact from="/" to={ROUTES.HOME} />
      <hr />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.GAME} component={GamePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
    </div>
  </Router>
);
export default withAuthentication(App);
