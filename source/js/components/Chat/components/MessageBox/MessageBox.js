import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from './components/Message/Message';
import './MessageBox.scss';

export class MessageBox extends Component {
    constructor(props) {
        super(props);
    }
    renderMessages() {
        const { messages } = this.props

        console.log("TAKIE MESSAGES DOSTALEM", this.props.messages)
        if (typeof this.props.messages != 'undefined') {
            return this.props.messages.map((message, key) => {
                return(
                    <Message text={ message.text }
                             date={ message.date }
                             author={ message.author }
                             key={key}
                    />
                );
            });
        }
    }

  render() {
    const { messages } = this.props
    return (
        <div className="row messages">
            { this.renderMessages() }
        </div>
    );
  }

}

export default MessageBox;
