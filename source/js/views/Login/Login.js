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
              <div className='panel-login col-4'>
                  <div>
                      <h2>Login:</h2>
                      <LoginForm />
                <div className='row row-center'>
                    <div className='col middle'>
                      <NavLink
                        to={ routeCodes.DASHBOARD }
                      >
                        - Back to main site
                      </NavLink>
                      <NavLink
                        to={ routeCodes.DASHBOARD }
                      >
                        forgot your Password?
                      </NavLink>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='row row-center'>
            <div className='outer col-5'>
                <p className=''>Don't have account?</p>
                <NavLink
                  to={ routeCodes.REGISTER }
                >
                  Sign up!
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
