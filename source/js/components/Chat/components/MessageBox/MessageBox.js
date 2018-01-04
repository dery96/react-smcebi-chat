import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from './components/Message/Message';
import './MessageBox.scss';

@connect(state => ({
  messages: state.app.get('messages')
}))
export class MessageBox extends Component {
    constructor(props) {
        super(props);

    }
    renderMessages() {
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

  render() {
      const { messages } = this.props
    return (
        <div className="row messages">
            { this.renderMessages() }
        </div>
    );
  }

}
function mapStateToProps(state) {
  return {
      messages: state.messages,
      };
}
export default connect(mapStateToProps)(MessageBox);
