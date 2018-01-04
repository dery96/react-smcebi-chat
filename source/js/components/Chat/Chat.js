import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MessageBox } from './components';

import { loadInitialMessages,
         newMessage,
         clearMessages,
         loadChatAction,
         refreshOnlineAction,
         } from 'actions';
import { urlConstants } from 'constants/url.constants';

@connect(state => ({
  messages: state.app.get('messages'),
  user: state.app.get('user'),
}))
export class Chat extends Component {
    componentWillUnmount(props) {
        const { dispatch } = this.props
        this.state.ws.close();
        dispatch(clearMessages());
    }
    constructor(props) {
        super(props)
        const { dispatch, user } = this.props
        if (this.props.user) {
            const name = "?name=" + this.props.user.nickname;
            const token = "&token=" + this.props.user.token;
            const channel = this.props.user.activeChannel ?
                            '&channel=' + this.props.user.activeChannel
                            : '';
            this.state = {
                ws: new WebSocket(urlConstants.CHAT_URL + name + token + channel)
            };
        }
        this.state.ws.onmessage = msg => {
            const parsedMsg = JSON.parse(msg.data);
            console.log(parsedMsg)
            if (parsedMsg.type === 'CHANNELS') {
                parsedMsg.channels = JSON.parse(parsedMsg.channels);
                dispatch( loadChatAction(parsedMsg) )
            } else if (parsedMsg.type === 'ONLINE_USERS') {
                console.log("WCHODZE JAKO ONLINE USRES");
                dispatch( refreshOnlineAction(parsedMsg) )
            }
            // } else {
            //     dispatch(newMessage(msg.data))
            // }
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
  }

  render() {
    const { dispatch, user } = this.props
    return (
        <div className="message-box col">
            <MessageBox />
            <div className="send-area">
              <div className="row">
                <input className="form-control col-10"
                    value={ this.state.login }
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
       };
}

export default connect(mapStateToProps)(Chat);
