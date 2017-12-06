import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {routeCodes} from '../../config/routes';

import {connect} from 'react-redux';
import {userRegisterRequest} from '../../actions/registerActions';

import RegisterForm from './components/RegisterForm';
import './Register.scss'

class Register extends Component {
  componentDidMount() {
    document.body.className = "login-bg" // Or set the class
  }

  componentWillUnmount() {
    document.body.className = "normal-bg"
  }

  render() {
    const {userRegisterRequest} = this.props;
    return (
        <div className="register-container">
            <div className='row row-center'>
                <div className='panel col-sm-10 col-md-6 col-lg-5 col-xl-4'>
                    <h2>Create new account</h2>
                    <RegisterForm userRegisterRequest={userRegisterRequest}/>
                        <NavLink to={routeCodes.DASHBOARD} className="back">
                          Back to main site
                        </NavLink>
                </div>
            </div>
        </div>
    );
  }
}

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
};

export default connect(null, {userRegisterRequest})(Register);