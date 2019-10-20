import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';
import { AuthUserContext } from '../session';
import SignOutButton from '../sign_out';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => {
        return (
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            {authUser ?
              <React.Fragment>
                <li>
                  <Link to={ROUTES.GAME}>Game</Link>
                </li>
                <li>
                  <SignOutButton />
                </li>
              </React.Fragment> : null
            }
          </ul>
        );
      }}
    </AuthUserContext.Consumer>
  </div>
);

export default Navigation;
