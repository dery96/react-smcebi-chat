import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ChannelUsers extends Component {
  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers() {
      const { users } = this.props;
      if (this.props.users) {
          return this.props.users.map( (activeUser, index) => {
              return (
                  <li key={index}> { activeUser } </li>
              );
          });
      }
  }

  render() {
      const { users } = this.props;
    return (
        <div>
            <div className='col channel-title'>Active Users:</div>
            <div className='col channel-users'>
                  <ul className=''>
                      { this.renderUsers() }
                 </ul>
            </div>
        </div>
    );
  }
}

ChannelUsers.propTypes = {};
ChannelUsers.defaultProps = {};
export default ChannelUsers;
