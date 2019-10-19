import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './components/navigation/routes';
import Navigation from './components/navigation';
import SignInPage from './components/sign_in';
import HomePage from './components/home';
import GamePage from './components/game';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />      
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.GAME} component={GamePage} />
    </div>
  </Router>
);

  export default App;