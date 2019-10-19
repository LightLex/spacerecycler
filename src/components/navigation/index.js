import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.GAME}>Game</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;
