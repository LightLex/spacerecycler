import React from 'react';
import {SignInForm} from '../log_in';
import { AuthUserContext } from '../session';

const HomePage = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (
          !authUser && <SignInForm/>
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

export default HomePage;
