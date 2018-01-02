import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Chat } from '../../components/Chat/Chat';
import { ChannelPanel, ChannelOperations } from '../../components/Panel/index';
import './Channels.scss';

function SwitchPanelControl(props) {
    return (
        <div className='left-panel col-3'>
          {props.panel ? (
            <ChannelOperations />

          ) : (
            <ChannelPanel />
          )}
        </div>
    );
}

@connect(state => ({
  user: state.app.get('user'),
}))
class Channels extends Component {
  constructor(props) {
    super(props);
    const { dispatch, user } = this.props
    this.state = {
      panel: false,
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
      this.setState({ panel: !(this.state.panel) });
  }

  render() {
    const { dispatch, user } = this.props
    return (
      <div className='channel'>
          { this.props.user.token
              ? <div><div className='row'>
                  <SwitchPanelControl panel={ this.state.panel } />
                  <Chat />
              </div>
              <div className="row">
                  <button
                      name='panel'
                      onClick={ this.onClick }
                  >
                      SwitchPanel
                  </button>
              </div></div>
          : <div className='row'><h3 className='col mt-4 text-center not-logged'>To use it you must login first!</h3></div>}
      </div>

    );
  }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
export default connect(mapStateToProps)(Channels);
