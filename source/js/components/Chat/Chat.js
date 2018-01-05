import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import { MessageBox } from './components';

import { newMessage,
         clearMessages,
         loadChatAction,
         refreshOnlineAction,
         userLogoutAction,
         } from 'actions';
import { urlConstants } from 'constants/url.constants';

@connect(state => ({
  messages: state.app.get('messages'),
  user: state.app.get('user'),
  channels: state.app.get('channels'),
}))
export class Chat extends Component {
    componentWillUnmount(props) {
        const { dispatch } = this.props
        this.state.ws.close();
        dispatch(clearMessages());
    }
    constructor(props) {
        super(props)
        console.log("RENDERUJE CZAT!@#$%");
        const { dispatch, user } = this.props
        this.state = {
            ws: null,
            message: '',
        }

        if (this.props.user) {
            console.log(this.props.user.activeChannel);
            const name = "?name=" + this.props.user.nickname;
            const token = "&token=" + this.props.user.token;
            const channel = this.props.user.activeChannel.name ?
                            '&channel=' + this.props.user.activeChannel.id
                            : '';
            this.state = {
                ws: new WebSocket(urlConstants.CHAT_URL + name + token + channel),
                message: ''
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
                    <Redirect to={ '/channels'}/>
                } else {
                    dispatch( refreshOnlineAction(msg) )
                }
            }

            if ( msg.type === 'MESSAGE' ) {
                dispatch(newMessage(msg.data) )
            }
        }
        this.state.ws.onclose = () => console.log("close connection");
        this.handleClick = this.handleClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

  handleClick(e) {
      e.preventDefault();
      this.state.ws.send(this.state.message);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    const { dispatch, user } = this.props
    return (
        <div className="message-box col">
            <MessageBox />
            <div className="send-area">
              <div className="row">
                <input className="form-control col-10"
                    value={ this.state.message }
                    className='form-control'
                    onChange={ this.onChange }
                    type='text'
                    name='message'
                    placeholder='Enter your login'
                    />
                <button type="button"
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
          user: state.user,
          channels: state.channels,
       };
}

export default connect(mapStateToProps)(Chat);
