import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ChannelUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelTitle: 'Looby',
      channelOwner: 1,
    }
  }

  renderUsers() {
      return this.props.activeUser.map( (activeUser, index) => {
          return (
              <li key={index}> { activeUser } </li>
          );
      });
  }

  render() {
    return (
        <div>
            <div className='col channel-title'>Active Users:</div>
            <div className='col channel-users'>
                  <ul className=''>
                      {}
                 </ul>
            </div>
        </div>
    );
  }
}

ChannelUsers.propTypes = {};
ChannelUsers.defaultProps = {};

export default ChannelUsers;
