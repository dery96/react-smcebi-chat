import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeWsConnection } from 'actions';

import './ChannelOperations.scss';
import { ChannelActions } from './components/ChannelActions';
import { ChannelUsers } from './components/ChannelUsers';

@connect(state => ({

}))

export class ChannelOperations extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.findProperActiveChannel = this.findProperActiveChannel.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props
    dispatch( closeWsConnection() );
  }

  findProperActiveChannel() {
    const { messages, user } = this.props
    if ( typeof this.props.messages !== 'undefined' ) {
        var channelMessages = this.props.messages.find( channel => {
            return channel.channelId === ''+this.props.user.activeChannel.id
        });

        if (typeof channelMessages !== 'undefined') {
            const onlineChannelUsers = [...channelMessages.text].pop()
            if ( typeof onlineChannelUsers !== 'undefined' ) {
                return onlineChannelUsers.onlineChannelUsers
            }
        }
    }
    return [];
  }

  render() {
    const { dispatch, user, channels, messages } = this.props
    return (
      <div className='operations'>
        <div className='channel-title'>
          { this.props.user.activeChannel.name }
      </div>
        <ChannelActions />
        <ChannelUsers users={this.findProperActiveChannel()} />
        <button className="col disconnect btn"
                type="submit"
                name="button"
                onClick = { this.handleClick }> Disconenct </button>
     </div>
    );
  }
}

ChannelOperations.propTypes = {};
ChannelOperations.defaultProps = {};

export default connect(null)(ChannelOperations);
