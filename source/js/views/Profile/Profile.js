import React, { Component } from 'react';
import {connect} from 'react-redux';
import defaultAvatar from '../../../assets/img/defaultAvatar2.png';

import './Profile.scss';

@connect(state => ({
    user: state.app.get('user'),
}))
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newPassword: '',
        againNewPassword: '',
        changePassword: false,
        changeNickname: false,
    }
    this.changePasswordForm = this.changePasswordForm.bind(this);
    this.profileInformation = this.profileInformation.bind(this);
  }

  changePasswordForm() {
      return (
          <form onSubmit={ this.onSubmit }>
            <div className='form-group' >
              <label className='control-label mt-2 mb-2'>New Password</label>
              <input
                className='form-control'
                onChange={ this.onChange }
                type='text'
                name='login'
                placeholder='Enter new password..'
                autoComplete="current-password"
              />
            </div>

            <div className='form-group' >
              <label className='control-label mt-2 mb-2'>Again Password</label>
              <input
                className='form-control'
                onChange={ this.onChange }
                type='password'
                name='password'
                placeholder='Enter new password again..'
                autoComplete="current-password"
              />
            </div>
            <div className='form-group sumbit'>
              <button
                  className='btn'
                  type='submit'
                  >
                Change Your Password
              </button>
            </div>
          </form>
      );
  }

  profileInformation() {
      return (
          <div className='profile'>
              <div className="row">
                  <img src={ defaultAvatar }
                      alt='default avatar'
                      className='avatar' />
                  <div className="col">
                      <h2> Your profile: <span className='login'>{ this.props.user.login }</span> </h2>
                      <ul className='user-profile-information'>
                          <li><span className="label">Nickname:</span> { this.props.user.nickname }</li>
                          <li><span className="label">Gender:</span> { this.props.user.gender === 'M'
                              ? <span className='male'> Male </span>
                              : <span className='female'> Female </span>
                           }</li>
                       <li><span className="label">Join:</span> { this.props.user.registration_date }</li>
                      </ul>
                  </div>
              </div>
              { this.state.changePassword ? <div className="change-password">
                    <div className="row">
                        <div className="col">
                            <h4>Change Your password!</h4>
                        </div>
                    </div>
                    <div className="row">
                        { this.changePasswordForm() }
                    </div>
                </div> : ''}
          </div>
      );
  }
  render() {
    const { user } = this.props;
    return (
        <div className="profile-container">
            { this.props.user.login
                ? <div> {this.profileInformation()} </div>
            : <h3 className='not-logged col text-center'>To see your profile you need to login first.</h3>}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
          user: state.user,
       };
}

export default connect(mapStateToProps)(Profile);
