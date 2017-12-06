import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ChannelOperations.scss';
import { ChannelActions } from './components/ChannelActions';
import { ChannelUsers } from './components/ChannelUsers';

export class ChannelOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelTitle: 'Looby',
      channelOwner: 1,
    }
  }

  render() {
    return (
      <div className='operations'>
        <div className='channel-title'>
          { this.state.channelTitle }
      </div>
        <ChannelActions />
        <ChannelUsers />
        <div className="col disconnect">
            <button className="btn">Disconenct</button>
        </div>
     </div>
    );
  }
}

ChannelOperations.propTypes = {};
ChannelOperations.defaultProps = {};

export default ChannelOperations;
