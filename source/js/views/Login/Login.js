import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from 'config/routes';

import './Login.scss';

import Button from '../../components/Button/Button';

class Login extends Component {
  render() {
    return (
        <div className="login-container container">
            <div className="row row-center">
                <div className="panel-login col-6">
                    <h2>Login</h2>
                    <hr/>
                    <Button label="Login" />
                    <a href="href">
                        forgot your Password?
                    </a>
                    <a href="href" className="back">
                        - Back to main site
                    </a>
                </div>
            </div>
            <div className="outer row row-center">
                <div className="no-account">
                  Don't have account?
                  <NavLink
                    activeClassName='Menu-link--active'
                    className='Menu-link'
                    exact
                    to={routeCodes.REGISTER}
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
