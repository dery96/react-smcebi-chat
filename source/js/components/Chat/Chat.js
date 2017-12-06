import React, { Component } from 'react';

import { MessageBox } from './components';
import { SendArea } from './components';
export class Chat extends Component {

  render() {
    return (
        <div className="message-box col">
            <MessageBox />
            <SendArea />
        </div>
);
  }
}

export default Chat;
