import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {routeCodes} from 'config/routes';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isLoading: false,
      errors: {},
      isLogged: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className='form-group' >
          <label className='control-label mt-4'>Username:</label>
          <input
            value={ this.state.login }
            onChange={ this.onChange }
            type='text'
            name='login'
            className='form-control'
          />
        </div>

        <div className='form-group' >
          <label className='control-label mt-2 mb-2'>Password:</label>
          <input
            value={ this.state.password }
            onChange={ this.onChange }
            type='password'
            name='password'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-primary btn-center'>
            Sign in
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default LoginForm;
