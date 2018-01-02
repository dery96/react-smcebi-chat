import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import { routeCodes } from 'config/routes';

@connect(state => ({
  register: state.app.get('register'),
  loading: state.app.get('loading'),
}))
class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clientValidation = this.clientValidation.bind(this);
    this.serverValidation = this.serverValidation.bind(this);

    this.state = {
      login: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
      gender: '',
      errors: {
          password: ' ',
          passwordConfirmation: ' ',
          passwordCheckBoth: ' ',
          gender: ' ',
          login: ' ',
          nickname: ' ',
      },
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.clientValidation({ name: e.target.name, value: e.target.value })
  }

  clientValidation(target) {
      if (!target.value || target.value.trim() === '') {
          this.state.errors[target.name] = 'You\'ve left this field empty';
      } else {
          this.state.errors[target.name] = '';
      }
      if (target.name === 'password' || target.name === 'passwordConfirmation') {
              if (this.state.password != this.state.passwordConfirmation) {
                  this.state.errors.passwordCheckBoth = '';
              } else {
                  this.state.errors.passwordCheckBoth = 'You must write the same password';
              }
        }

  }

  serverValidation(target) {
      for (let [key, value] of Object.entries(target)) {
           if ( value ) {
               console.log(value);
               return false;
           }
        }
      return true;
  }

  onSubmit(e) {
      const { dispatch, userRegisterAction, register } = this.props;
      e.preventDefault();

      if (this.serverValidation(this.state.errors)) {
          dispatch(userRegisterAction(
              this.state.login,
              this.state.password,
              this.state.nickname,
              this.state.gender,
          ));
      }
  }

  render() {
      const { dispatch, userRegisterActionFinal } = this.props;
    return (
      <form onSubmit={ this.onSubmit }>
        <div className='form-group'>
          <label className='control-label'>Username:</label>
          <input
            value={ this.state.login }
            onChange={ this.onChange }
            type='text'
            name='login'
            className='form-control'
          />
          { this.state.errors.login ? <p className='err ml-0-25'>
              {this.state.errors.login} </p>
              : ''}

          <label htmlFor='' className='control-label'>Nickname:</label>
          <input
            value={ this.state.nickname }
            onChange={ this.onChange }
            type='text'
            name='nickname'
            className='form-control'
          />
          { this.state.errors.nickname ? <p className='err ml-0-25'>
              {this.state.errors.nickname} </p>
              : ''}

          <label htmlFor='' className='control-label'>Password:</label>
          <input
            value={ this.state.password }
            onChange={ this.onChange }
            type='password'
            name='password'
            className='form-control'
          />
          { this.state.errors.password ? <p className='err ml-0-25'>
              {this.state.errors.password} </p>
              : ''}

          <label className='control-label'>Confirm Password:</label>
          <input
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            type='password'
            name='passwordConfirmation'
            className='form-control'
          />
          { this.state.errors.passwordConfirmation ? <p className='err ml-0-25'>
              {this.state.errors.passwordConfirmation} </p>
              : ''}

          <label className='control-label mt-4 mr-4'>Gender:</label>

          <div className='btn-group' data-toggle='buttons'>
            <label className={ (this.state.gender === 'M') ? 'btn btn-dark active' : 'btn btn-dark' }>
              <input
                key={ 0 }
                value='M'
                onChange={ this.onChange }
                type='radio'
                name='gender'
              /> Male
            </label>

            <label className={ (this.state.gender === 'F') ? 'btn btn-dark active' : 'btn btn-dark' } >
              <input
                key={ 1 }
                value='F'
                onChange={ this.onChange }
                type='radio'
                name='gender'
              /> Female
            </label>
            { this.state.errors.gender ? <p className='err ml-0-25'>
                {this.state.errors.gender} </p>
                : ''}
          </div>
        </div>
        { this.state.errors.passwordCheckBoth ? <p className='err ml-0-25'>
            {this.state.errors.passwordCheckBoth} </p>
            : ''}
        <div className='form-group'>
          <button className='btn'>
            Sign up
          </button>
        </div>
        {this.props.register.status === 201 && (
          dispatch( userRegisterActionFinal() ),
          <Redirect to={ '/login'}/>
        )}
        { this.props.register.error ? <span className='err'>You have entered existing username or nickname in database!</span> : ''}
      </form>
    );
  }
}

RegisterForm.propTypes = {
  // userRegisterRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { register: state.register,
           loading: state.loading,
       };
}

export default connect(mapStateToProps)(RegisterForm);
