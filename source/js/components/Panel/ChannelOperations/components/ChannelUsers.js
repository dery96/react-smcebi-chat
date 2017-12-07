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

  render() {
    return (
        <div>
            <div className='col channel-title'>Active Users:</div>
            <div className='col channel-users'>
                  <ul className=''>
                      <li>Huno92</li>
                      <li>PanAndrzej</li>
                      <li>Dawidus92</li>
                      <li>Agnes</li>
                 </ul>
            </div>
        </div>
    );
  }
}

ChannelUsers.propTypes = {};
ChannelUsers.defaultProps = {};

export default ChannelUsers;
