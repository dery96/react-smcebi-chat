import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/registerActions';

import RegisterForm from './RegisterForm';



class RegisterPage extends Component {
  render() {
    const { userRegisterRequest } = this.props;
    return (
      <div className='row row-center'>
        <div className='col-md-4'>
          <RegisterForm userRegisterRequest={ userRegisterRequest } />
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
};

export default connect(null, { userRegisterRequest })(RegisterPage);
