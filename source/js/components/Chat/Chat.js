import React, { Component } from 'react';

import { MessageBox } from './components';
import { SendArea } from './components';
export class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

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
