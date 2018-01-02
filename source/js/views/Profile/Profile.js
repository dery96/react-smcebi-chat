import React, { Component } from 'react';
import {connect} from 'react-redux';



function ProfileInformation(props) {
      return (
          <div className='profile'>
              <div className="row">
                  <div className="col-6 login"> <h2> { props.user.login } Profile! </h2> </div>
              </div>
              <div className="row">
                  <ul className='user-profile-information'>
                      <li>Login: { props.user.login }</li>
                      <li>Nickname: { props.user.nickname }</li>
                      <li>Gender: { props.user.gender === 'M'
                          ? <span className='male'> Male </span>
                          : <span className='female'> Female </span>
                       }</li>
                  </ul>
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
      <div>
        { this.props.user.login
            ? <ProfileInformation user={ user } />
        : <h3 className='mt-4 text-center'>To see your profile you need to login first.</h3>}
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
