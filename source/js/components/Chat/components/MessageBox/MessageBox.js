import React, { Component } from 'react';

import { Message } from './components/Message/Message';
import './MessageBox.scss';

export class MessageBox extends Component {

  render() {
    return (
        <div className="row">
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
  }

}

export default MessageBox;

// WEBSOCKET THAT ADD
// <Message author={ this.state.author }
//            message={ this.state.message }
//            date={ this.state.date }/>
