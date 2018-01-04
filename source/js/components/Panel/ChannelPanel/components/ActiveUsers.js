import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ActiveUsers extends Component {
    constructor(props) {
        super(props)
        this.renderOnlineUsers = this.renderOnlineUsers.bind(this);
    }

    renderOnlineUsers() {
        return this.props.onlineUsers.map((user, key) => {
            return(
                <span>{user}, </span>
            );
        });
    }
  render() {
      const { onlineUsers } = this.props
      return(
          <div className="mt-2">
              <div className='channel-title'>
                  Online
              </div>
              <div className='col online-users'>
                  { this.props.onlineUsers
                      ? this.renderOnlineUsers()
                      : 'Currently nobody is logged in'}
              </div>
          </div>
      );
  };
}

export default ActiveUsers;
