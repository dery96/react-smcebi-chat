import React, { Component } from 'react';

import { Message } from './components/Message/Message';
import './MessageBox.scss';

export class MessageBox extends Component {
    constructor(props) {
        super(props)

    }
    renderMessages() {
        return this.props.messages.map(message => {
            return(
                <Message text={ this.props.message }
                         date={ this.props.date }
                         author={ this.props.author }
                />
            );
        });
    }

  render() {
    return (
        <div className="row">
            { this.renderMessages() }
        </div>
    );
  }

}

export default MessageBox;
