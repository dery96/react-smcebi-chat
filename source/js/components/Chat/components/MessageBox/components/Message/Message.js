import React, { Component } from 'react';

import './Message.scss';
export class Message extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { text, time, author } = this.props;
    return (
        <div className="message">
            {this.props.author === 'Server'
                ? <span className='server'> Server: { this.props.text } </span>
                : <p><span className="author">
                  { this.props.author }
                </span>
                <span className="time">{ this.props.date }</span>
                :
                <br/>
                <span className="text">
                  { this.props.text }
              </span></p>}
        </div>
    );
  }

}

export default Message;
