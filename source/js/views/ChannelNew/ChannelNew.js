import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import {routeCodes} from '../../config/routes';
import { newChannelAction } from 'actions';

import './ChannelNew.scss';

@connect(state => ({
    user: state.app.get('user'),
}))
export class ChannelNew extends Component {
    constructor(props) {
        super(props)
        this.newChannelForm = this.newChannelForm.bind(this)
        this.newChannelAction = this.newChannelAction.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            size: 0,
        }
    }

    componentDidMount() {
        document.body.className="login-bg" // Or set the class
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.body.className="normal-bg"
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === 13 ) {
          this.newChannelAction()
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.newChannelAction()
    }

    newChannelAction() {
        const { user } = this.props;
        dispatch( newChannelAction(this.state.name, this.state.size,
                                   this.props.user.id, this.props.user.id ));
    }

    onChange(e) {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    newChannelForm() {
        return (
            <form onSubmit={ this.onSubmit }>
              <div className='form-group' >
                <label className='control-label mt-4'>Channel Name</label>
                <input
                  value={ this.state.channelName }
                  className='form-control'
                  onChange={ this.onChange }
                  type='text'
                  name='channelName'
                  placeholder='Enter channel name'
                />
              </div>

              <div className='form-group' >
                <label className='control-label mt-2 mb-2'>Size</label>
                <input
                  className='form-control'
                  value={ this.state.size }
                  onChange={ this.onChange }
                  type='text'
                  name='size'
                  placeholder='Enter size'
                />
              </div>
              { this.props.login.error ? <span className='err'>You have entered wrong username or password!</span> : ''}
              <div className='form-group'>
                <button
                    className='btn'
                    type='submit'
                    >
                  Sign up
                </button>
              </div>
              {this.props.newChannel.status === 202 && (
                <Redirect to={ '/profile'}/>
              )}
            </form>
        );
    }

    render () {
        return (
            <div className="new-channel-container">
                { this.props.user.token
                    ? <div className='new-channel'>
                        <div className="row">
                            <div className="col">
                                { this.newChannelForm() }
                            </div>
                        </div>
                    </div>
                : <h3 className='not-logged col text-center'>To see your profile you need to login first.</h3>}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
          user: state.user,
       };
}

export default connect(mapStateToProps)(ChannelNew);
