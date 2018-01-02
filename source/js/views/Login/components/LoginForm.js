import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import { routeCodes } from 'config/routes';
// import { LoginValidation } from './LoginValidation';

@connect(state => ({
  login: state.app.get('login'),
  loading: state.app.get('loading'),
  user: state.app.get('user')
}))
export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
    this.state = {
        login: '',
        password: '',
    }
  }

  validation() {
      const { dispatch, userLoginAction, user } = this.props;
      if (!this.state.login || this.state.login.trim() === '') {
          return 'You\'ve left this field empty'
      }
      if (!this.state.password || this.state.password.trim() === '') {
          return 'You\'ve left this field empty'
      }
      if (this.props.login.error) {
          return 'You\'ve entered wrong username or password <strong>try again</strong>'
      }
      return ' ';
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
      const { dispatch, userLoginAction, user, login } = this.props;
    e.preventDefault();
    dispatch(userLoginAction(this.state.login, this.state.password))
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
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
        </div>
        { this.props.login.error ? <span className='err'>You have entered wrong username or password!</span> : ''}
        <div className='form-group'>
          <button
              className='btn'
              type='submit'
              >
            Sign up
          </button>
        </div>
        {this.props.login.status === 202 && (
          <Redirect to={ '/profile'}/>
        )}
      </form>
    );
  }
}

LoginForm.propTypes = {
};
LoginForm.defaultProps = {};

function mapStateToProps(state) {
  return { user: state.user,
           login: state.login,
           loading: state.loading,
       };
}

export default connect(mapStateToProps)(LoginForm)
