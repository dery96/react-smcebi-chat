import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { routeCodes } from 'config/routes';
// import { LoginValidation } from './LoginValidation';

function checkErrors(props) {
    return (
        <div className='err'>
          {props.error ? (
            props.errorMessage
          ) : (
            ''
          )}
        </div>
    );
}

function validation(props) {
    if (!props.login || props.login.trim() === '') {
        return 'You\'ve left this field empty'
    }
    if (!props.password || props.password.trim() === '') {
        return 'You\'ve left this field empty'
    }
    return '';
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      error: false,
      isLoading: false,
      isLogged: false,
      resultError: false,
      loginError: false,
      passwordError: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
          { checkErrors(this.state.error) }
        <div className='form-group' >
          <label className='control-label mt-4'>Username</label>
          <input
            value={ this.state.login }
            className='form-control'
            onChange={ this.onChange }
            type='text'
            name='login'
            placeholder='Enter your login'
          />
          { checkErrors(this.state.error) }
        </div>

        <div className='form-group' >
          <label className='control-label mt-2 mb-2'>Password</label>
          <input
            className='form-control'
            value={ this.state.password }
            onChange={ this.onChange }
            type='password'
            name='password'
            placeholder='Enter your password'
          />
          { checkErrors(this.state.error) }
        </div>

        <div className='form-group'>
          <button
              className='btn'
              >
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default LoginForm
