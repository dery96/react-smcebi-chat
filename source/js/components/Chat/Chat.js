import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { MessageBox } from './components';


import { urlConstants } from 'constants/url.constants';
import { newMessage,
         clearMessages,
         loadChatAction,
         refreshOnlineAction,
         userLogoutAction,
         wsConnectionAction,
         wsSendAction,
         } from 'actions';


@connect(state => ({
  messages: state.app.get('messages'),
  channels: state.app.get('channels'),
  user: state.app.get('user'),
  ws: state.app.get('ws'),
}))
export class Chat extends Component {

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount(props) {
        const { dispatch } = this.props
        /* this.state.ws.connection.close(); */
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    constructor(props) {
        super(props)
        const { dispatch, user, ws } = this.props
        this.state = {
            messageText: '',
            errNoConnection: false,
        }
        if (this.props.user) {
            dispatch( wsConnectionAction(
                this.props.user.nickname,
                this.props.user.token,
                this.props.user.activeChannel.id,
                this.props.user.activeChannel.name
            ));
        }

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

  handleKeyPress(e) {
      if (e.keyCode === 13 ) {
        this.sendMessage();
      }
  }

  handleClick(e) {
      e.preventDefault();
      this.sendMessage();
  }

  sendMessage() {
      const { dispatch, user, messages, ws } = this.props
      if (this.state.messageText && this.state.messageText !== '' && this.props.ws) {
          dispatch(wsSendAction( this.state.messageText ))
          this.setState({ messageText: '', errNoConnection: false })
      }
      if (!this.props.ws) {
          this.setState({ messageText: '', errNoConnection: true })
      }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { dispatch, user, messages, ws } = this.props
    return (
        <div className="message-box col">
            { this.props.user.activeChannel.id !== null && this.props.ws ?
                <MessageBox messages={ this.props.messages } activeChannel={ this.props.user.activeChannel }/>
                : <p className="row messages not-in-channel"> First you <span className='stronger'>must join</span> to any channel first </p>
             }
            <div className="send-area">
              <div className="row">
                <input className="form-control col-10"

                    className='form-control'
                    onChange={ this.onChange }
                    type='text'
                    name='messageText'
                    placeholder='Write text message...'
                    value={ this.state.messageText }
                    />
                <button type="submit"
                        name="button"
                        className="btn col-2"
                        onClick = { this.handleClick }>
                  Send
                </button>
              </div>
            </div>
            { this.state.errNoConnection ? <span className='row err'>You can't send message before join to any channel</span> : '' }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
          messages: state.messages,
          channels: state.channels,
          user: state.user,
          ws: state.ws,
       };
}

export default connect(mapStateToProps)(Chat);
