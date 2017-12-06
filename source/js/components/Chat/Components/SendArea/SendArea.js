import React, { Component } from 'react';

export class SendArea extends Component {

  render() {
    return (
        <div className="send-area">
          <div className="row">
            <input className="form-control col-10" type="text" style={{}}/>
            <button type="button" name="button" className="btn col-2">
              Send
            </button>
          </div>
        </div>
    );
  }

}

export default SendArea;

// WEBSOCKET THAT ADD
// <Message author={ this.state.author }
//            message={ this.state.message }
//            date={ this.state.date }/>
