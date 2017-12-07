import React, { Component } from 'react';

import './Message.scss';
export class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
        message: '',
        author: {
            colorName: 'green',
            gender: 'M',
            name: 'AutorTestowy'
        },
        date: '',
    };
  }

  render() {
    return (
        <div className="message">
          <span className="author">
            Dominik Szyja
          </span>
          <span className="time">10:00</span>
          :
          <br/>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
    );
  }

}

export default Message;
