import React, { Component } from 'react';

class MessageBox extends Component {

  render() {
    return (
      <div className="col">
        // WEBSOCKET THAT ADD
        // <Message author={ this.state.author }
                    message={ this.state.message }
                    date={ this.state.date }/>
      </div>
    );
  }

}

export default MessageBox;
