import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
      gender: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userRegisterRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>

        <div className='form-group'>
          <label className='control-label mt-3'>Username:</label>
          <input
            value={ this.state.username }
            onChange={ this.onChange }
            type='text'
            name='username'
            className='form-control'
          />

          <label htmlFor='' className='control-label mt-3'>Nickname:</label>
          <input
            value={ this.state.nickname }
            onChange={ this.onChange }
            type='text'
            name='nickname'
            className='form-control'
          />

          <label htmlFor='' className='control-label mt-3'>Password:</label>
          <input
            value={ this.state.password }
            onChange={ this.onChange }
            type='password'
            name='password'
            className='form-control'
          />

          <label className='control-label mt-3'>Confirm Password:</label>
          <input
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            type='password'
            name='passwordConfirmation'
            className='form-control'
          />

          <label className='control-label mt-4 mr-4'>Gender:</label>

          <div className='btn-group' data-toggle='buttons'>
            <label className={ (this.state.gender === 'Male') ? 'btn btn-primary active' : 'btn btn-primary' }>
              <input
                key={ 0 }
                value='Male'
                onChange={ this.onChange }
                type='radio'
                name='gender'
              /> Male
            </label>

            <label className={ (this.state.gender === 'Female') ? 'btn btn-primary active' : 'btn btn-primary' } >
              <input
                key={ 1 }
                value='Female'
                onChange={ this.onChange }
                type='radio'
                name='gender'
              /> Female
            </label>
          </div>
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
};

export default RegisterForm;


