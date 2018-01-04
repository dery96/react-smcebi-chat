import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ChannelList extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props
        this.renderChannels = this.renderChannels.bind(this);
    }

    renderChannels() {
        return this.props.user.subscribedChannels.map( (channel, key)  => {
            return (
                <li key={ key }>
                    { channel.name }, na { channel.size }
                </li>
            );
        })
    };

  render() {
      const { user } = this.props
      return (
          <div className="mt-2">
              <div className='channel-title'>
                  Channels
              </div>
              {(this.props.user.subscribedChannels.length === 0)
                  ? <div className='no-channels'
                           key={ 0 }>
                          You're <strong>not subscribe</strong> any channel yet.
                    </div>
                  : this.renderChannels() }
          </div>
      );
  }
}

export default ChannelList;
