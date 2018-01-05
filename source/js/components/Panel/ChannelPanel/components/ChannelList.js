import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { setActiveChannelAction } from 'actions';

@connect(state => ({
  channels: state.app.get('channels'),
  user: state.app.get('user'),
}))
export class ChannelList extends Component {
    constructor(props) {
        super(props);
        const { user, channels } = this.props
        this.renderChannels = this.renderChannels.bind(this);
        this.setActiveChannel = this.setActiveChannel.bind(this);
    }

    renderChannels() {
        const { channels, user } = this.props;
        return this.props.user.subscribedChannels.data.map( (sbcrChannel, key)  => {
            if (!(this.props.channels.length === 0)) {
                const properChannel = this.props.channels.find( channel => {
                    return channel.id === sbcrChannel.channel_id
                })
                return (
                    <span key={ properChannel.id }
                          name={ properChannel.name }
                        onClick={ () => this.setActiveChannel(properChannel.name, properChannel.id) }
                        >
                        { this.props.user.activeChannel.name === properChannel.name
                          ? <strong>{ properChannel.name }</strong>
                          : properChannel.name
                        }
                    </span>
                );
            }
        })
    };

  setActiveChannel(name, id) {
    const { dispatch, user } = this.props;

    dispatch( setActiveChannelAction( { name: name, id: id } ) )
  }
  render() {
      const { user } = this.props
      return (
          <div className="mt-2">
              <div className='channel-title'>
                  Subscribe Channels
              </div>
              {(this.props.user.subscribedChannels.data.length === 0)
                  ? <div className='no-channels'
                           key={ 0 }>
                          You're <strong>not subscribed</strong> any channel yet.
                    </div>
                  : <div className='subscribed-channels'>{ this.renderChannels() }</div> }
          </div>
      );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        channels: state.channels,
    };
}
export default withRouter(connect(mapStateToProps)(ChannelList));
