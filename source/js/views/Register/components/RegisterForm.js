import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
      gender: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (isValid()) {

    }

  }

  render() {
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

          <label htmlFor='' className='control-label'>Nickname:</label>
          <input
            value={ this.state.nickname }
            onChange={ this.onChange }
            type='text'
            name='nickname'
            className='form-control'
          />

          <label htmlFor='' className='control-label'>Password:</label>
          <input
            value={ this.state.password }
            onChange={ this.onChange }
            type='password'
            name='password'
            className='form-control'
          />

          <label className='control-label'>Confirm Password:</label>
          <input
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            type='password'
            name='passwordConfirmation'
            className='form-control'
          />

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
          </div>
        </div>
        <div className='form-group'>
          <button className='btn'>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  // userRegisterRequest: PropTypes.func.isRequired,
};

export default RegisterForm;
