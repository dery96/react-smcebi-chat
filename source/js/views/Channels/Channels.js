import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Chat } from '../../components/Chat/Chat';
import { ChannelPanel, ChannelOperations } from '../../components/Panel/index';
import './Channels.scss';

function SwitchPanelControl(props) {
    return (
        <div className='panel row'>
          {props.panel ? (
            <ChannelPanel />
          ) : (
            <ChannelOperations />
          )}
        </div>
    );
}

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: true,
    };

    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
      document.body.className="login-bg" // Or set the class
  }

  componentWillUnmount() {
      document.body.className="normal-bg"
  }

  onClick(e) {
      console.log(!this.state.panel);
      this.setState({ panel: !(this.state.panel) });
  }

  render() {
    return (
      <div className='channel'>
        <div className='row'>
            <div className="panel col-3">
                <SwitchPanelControl panel={ this.state.panel } />
            </div>
            <Chat />
        </div>
        <div className="row">
            <button
                name='panel'
                onClick={ this.onClick }
            >
                SwitchPanel
            </button>
        </div>
      </div>

    );
  }
}

export default Channels;
