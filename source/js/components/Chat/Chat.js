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
         } from 'actions';


@connect(state => ({
  messages: state.app.get('messages'),
  channels: state.app.get('channels'),
  user: state.app.get('user'),
}))
export class Chat extends Component {

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount(props) {
        const { dispatch } = this.props
        this.state.ws.close();

        document.removeEventListener('keydown', this.handleKeyPress);
    }

    constructor(props) {
        super(props)
        const { dispatch, user } = this.props
        this.state = {
            ws: null,
            messageText: ''
        }
        if (this.props.user) {
            const name = "?username=" + this.props.user.nickname;
            const token = "&token=" + this.props.user.token;

            const channelId = this.props.user.activeChannel.id ?
                            '&id=' + this.props.user.activeChannel.id
                            : '';
            const channelName = this.props.user.activeChannel.name ?
                            '&channel_name=' + this.props.user.activeChannel.name
                            : '';
            this.state = {
                ws: new WebSocket(urlConstants.CHAT_URL + name +
                                  token + channelId + channelName),
                messageText: '',
            }
        }
        this.state.ws.onmessage = msg => {
            msg = JSON.parse(msg.data);

            if (msg.type === 'CHANNELS') {
                msg.channels = JSON.parse(msg.channels);
                dispatch( loadChatAction(msg) )
            }

            if (msg.type === 'ONLINE_USERS') {
                if ( !msg.onlineUsers.includes(this.props.user.nickname) ) {
                    dispatch( userLogoutAction(this.props.user.token) );
                } else {
                    dispatch( refreshOnlineAction(msg) )
                }
            }

            if ( msg.type === 'MESSAGE' ) {
                dispatch( newMessage(msg) )
            }
        }
        this.state.ws.onclose = () => console.log("close connection");
        this.handleClick = this.handleClick.bind(this)
        this.onChange = this.onChange.bind(this)
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
      if (this.state.messageText && this.state.messageText !== '') {
          const data = JSON.stringify({
            channelId: "" + this.props.user.activeChannel.id,
            username: this.props.user.nickname,
            message: this.state.messageText
          })
          console.log("send: ", data);
          this.state.ws.send( data );
          this.setState({ messageText: '' })
      }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { dispatch, user, messages } = this.props
    return (
        <div className="message-box col">
            { this.props.user.activeChannel.id !== null ?
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
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
          messages: state.messages,
          channels: state.channels,
          user: state.user,
       };
}

export default connect(mapStateToProps)(Chat);
