import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from '../../config/routes';
import { connect } from 'react-redux';
import { userLoginAction } from 'actions';

import './Login.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  componentDidMount() {
      document.body.className="login-bg" // Or set the class
  }

  componentWillUnmount() {
      document.body.className="normal-bg"
  }

  render() {
    return (<div className='login-container'>
      <div className='row row-center'>
        <div className='panel col-sm-10 col-md-6 col-lg-5 col-xl-4'>
            <h2>Login:</h2>
            <LoginForm userLoginAction={ userLoginAction } />
            <div className='row row-center'>
              <div className='col middle'>
                <NavLink to={routeCodes.DASHBOARD}>
                  Back to main site
                </NavLink>
                <NavLink to={routeCodes.DASHBOARD}>
                  forgot your Password?
                </NavLink>
              </div>
            </div>
        </div>
      </div>
      <div className='row row-center'>
        <div className='outer col-sm-10 col-md-6 col-lg-5 col-xl-4'>
          <p className=''>Don't have account?</p>
          <NavLink to={routeCodes.REGISTER}>
            Sign up!
          </NavLink>
        </div>
      </div>
    </div>);
  }
}
Login.defaultProps = {};

export default Login;
