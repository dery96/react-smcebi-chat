import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ActiveUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trigger: false,
        }
        this.renderOnlineUsers = this.renderOnlineUsers.bind(this);
        this.forceRenderComponent = this.forceRenderComponent.bind(this);
    }

    renderOnlineUsers() {
        return this.props.onlineUsers.map((user, key) => {
            return(
                <span key={key}>{user}, </span>
            );
        });
    }
    forceRenderComponent() {
        let tmp = this.state.trigger
        this.setState( { trigger: !tmp } )
    }
  render() {
      const { onlineUsers } = this.props
      return(
          <div className="mt-2"
               onClick={ this.forceRenderComponent }>
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
