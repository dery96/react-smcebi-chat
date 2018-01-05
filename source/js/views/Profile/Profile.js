import React, { Component } from 'react';
import {connect} from 'react-redux';
import defaultAvatar from '../../../assets/img/defaultAvatar2.png';

import './Profile.scss';

function ProfileInformation(props) {
      return (
          <div className='profile'>
              <div className="row">
                  <img src={ defaultAvatar }
                      alt='default avatar'
                      className='avatar' />
                  <div className="col">
                      <h2> Your profile: <span className='login'>{ props.user.login }</span> </h2>
                      <ul className='user-profile-information'>
                          <li><span className="label">Nickname:</span> { props.user.nickname }</li>
                          <li><span className="label">Gender:</span> { props.user.gender === 'M'
                              ? <span className='male'> Male </span>
                              : <span className='female'> Female </span>
                           }</li>
                       <li><span className="label">Join:</span> { props.user.registration_date }</li>
                      </ul>
                  </div>
              </div>
          </div>
      );
}

@connect(state => ({
    user: state.app.get('user'),
}))
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    return (
        <div className="profile-container">
            { this.props.user.login
                ? <ProfileInformation user={ user } />
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
