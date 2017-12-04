import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {routeCodes} from '../../config/routes';

import './Login.scss';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='row row-center'>
          <div className='col-4'>
            <div className='panel-login'>
              <h2>Login</h2>\
              <hr />
              <LoginForm />



              <NavLink
                className='Menu-link'
                exact
                to={ routeCodes.DASHBOARD }
              >
                forgot your Password?
              </NavLink>

              <NavLink
                className='Menu-link'
                exact
                to={ routeCodes.DASHBOARD }
              >
                - Back to main site
              </NavLink>
            </div>

          <div className='outer row row-center'>
              <p>Don't have account?</p>
              <NavLink
                className='Menu-link'
                exact
                to={ routeCodes.REGISTER }
              >
                Sign up!
              </NavLink>
          </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Login;
