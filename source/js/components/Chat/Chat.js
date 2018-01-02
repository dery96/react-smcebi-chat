import React, { Component } from 'react';
import { connect } from 'react-redux';


import { MessageBox } from './components';

import { loadInitialMessages, newMessage, clearMessages} from 'actions';
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
            this.state = {
                message: '',
                ws: new WebSocket("ws://" + "localhost" + ":" + "7171" + "/chat/?name="+this.props.user.nickname)
            }
        }
        /*
        this.state.ws.onopen = () => {
            this.state.ws.send(this.props.user.nickname);
        } */
        this.state.ws.onmessage = msg => {
            dispatch(newMessage(msg.data))
        }
        this.state.ws.onclose = () => console.log("close connection");
        this.handleClick = this.handleClick.bind(this)
        this.onChange = this.onChange.bind(this)

    }

  handleClick(e) {
      e.preventDefault();
      console.log(this.state.message);
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
