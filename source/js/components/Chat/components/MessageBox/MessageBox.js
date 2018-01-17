import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from './components/Message/Message';
import './MessageBox.scss';

export class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }
    renderMessages() {
        const { messages, activeChannel } = this.props
        if ( typeof this.props.messages !== 'undefined' ) {
            var channelMessages = this.props.messages.find( channel => {
                return channel.channelId === ''+activeChannel.id
            });

        if (typeof channelMessages !== 'undefined') {
            channelMessages = [...channelMessages.text]
            return channelMessages.map( (msg, key) => {
                this.scrollToBottom()
                return(
                    <Message text={ msg.text }
                             date={ msg.date }
                             author={ msg.author }
                             key={key}
                    />
                );
            });
        }

        }
    }
    scrollToBottom() {
        const box = document.getElementById('box');
        if (box && box !== 'null') {
            box.scrollTop = box.scrollHeight + 99;
        }
    }

  render() {
    const { messages, activeChannel } = this.props
    return (
        <div className="row messages" id='box'>
            { this.scrollToBottom() }
            { this.renderMessages() }
            { this.scrollToBottom() }
        </div>
    );
  }

}

export default MessageBox;
