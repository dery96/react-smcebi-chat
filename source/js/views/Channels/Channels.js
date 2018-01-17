import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Chat } from '../../components/Chat/Chat';
import { ChannelPanel, ChannelOperations } from '../../components/Panel/index';
import './Channels.scss';

@connect(state => ({
  user: state.app.get('user'),
  channels: state.app.get('channels'),
  messages: state.app.get('messages'),
  onlineUsers: state.app.get('onlineUsers'),
  ws: state.app.get('ws'),
}))
class Channels extends Component {
  constructor(props) {
    super(props);
    const { dispatch, user, onlineUsers } = this.props

    this.onClick = this.onClick.bind(this);
    this.switchPanelControl = this.switchPanelControl.bind(this);
  }
  componentDidMount() {
      document.body.className="login-bg" // Or set the class
  }

  componentWillUnmount() {
      document.body.className="normal-bg"
  }

  onClick(e) {
      this.setState({ panel: !(this.state.panel) });
  }

  switchPanelControl() {
      return (
          <div className='left-panel col-xs-4 col-sm-3'>
            {this.props.ws && this.props.user.activeChannel.id ? (
              <ChannelOperations user={ this.props.user }
                                 channels={ this.props.channels }
                                 messages={ this.props.messages }
              />

            ) : (
              <ChannelPanel user={ this.props.user }
                            onlineUsers={ this.props.onlineUsers }
                            channels={ this.props.channels }
              />
            )}
          </div>
      );
  }

  render() {
    const { dispatch, user, channels, ws } = this.props
    return (
      <div className='channel'>
          { this.props.user.token
              ? <div className='row'>
                  { this.switchPanelControl() }
                  <Chat />
                </div>
          : <div className='row'><h3 className='col mt-4 text-center not-logged'>To use it you must login first!</h3></div>}
      </div>

    );
  }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        channels: state.channels,
        onlineUsers: state.onlineUsers,
        ws: state.ws,
    };
}
export default connect(mapStateToProps)(Channels);
