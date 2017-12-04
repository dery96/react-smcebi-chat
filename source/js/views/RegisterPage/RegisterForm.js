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
    this.isValid = this.isValid.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    this.resetValidationStates();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userRegisterRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>

        <div className='form-group'>
          <label className='control-label mt-3'>Username:</label>
          <input
            value={ this.state.login }
            onChange={ this.onChange }
            type='text'
            name='login'
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
            <label className={ (this.state.gender === 'M') ? 'btn btn-primary active' : 'btn btn-primary' }>
              <input
                key={ 0 }
                value='M'
                onChange={ this.onChange }
                type='radio'
                name='gender'
              /> Male
            </label>

            <label className={ (this.state.gender === 'F') ? 'btn btn-primary active' : 'btn btn-primary' } >
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

