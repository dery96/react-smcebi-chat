import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import {routeCodes} from '../../config/routes';
import { newChannelAction } from 'actions';

import './ChannelNew.scss';

@connect(state => ({
    user: state.app.get('user'),
    newChannel: state.app.get('newChannel'),
}))
export class ChannelNew extends Component {
    constructor(props) {
        super(props)

        this.newChannelForm = this.newChannelForm.bind(this);
        this.newChannelAction = this.newChannelAction.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.testName = this.testName.bind(this);
        this.testSize = this.testSize.bind(this);

        this.state = {
            channelName: '',
            size: null,
            errName: false,
            errSize: false,
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

    testName() {
        if (this.state.channelName.trim() === '' || this.state.channelName.match(/^\d/)) {
            this.setState({ errName: true });
            return false;
        }
        this.setState({ errName: false });
        return true;
    }

    testSize() {
        if (this.state.size > 200) {
            this.setState({ errSize: true });
            return false;
        }
        this.setState({ errSize: false });
        return true;
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.testSize() && this.testName()) {
            this.newChannelAction();
        }
    }

    newChannelAction() {
        const { user, dispatch } = this.props;
        dispatch( newChannelAction(this.state.channelName, this.state.size,
                                   this.props.user.id, this.props.user.token ));
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    newChannelForm() {
        return (
            <form onSubmit={ this.onSubmit }>
              <div className='form-group' >
                <label className='control-label mt-4'>Channel Name:</label>
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
                <label className='control-label mt-2 mb-2'>Size:</label>
                <input
                  className='form-control'
                  value={ this.state.size }
                  onChange={ this.onChange }
                  type='text'
                  name='size'
                  placeholder='Enter size'
                />
              </div>

              <div className='form-group'>
                <button
                    className='btn'
                    type='submit'
                    >
                  Create new Channel
                </button>
              </div>
              { this.state.errName ? <span className='err'>You are trying to create exsiting Channel or wrong ChannelName</span> : ''}
              { this.state.errSize ? <p className='err'>Your size too large (max: 200) </p> : ''}
              { this.props.newChannel.error ? <span className='err'>You have entered exsiting ChannelName!</span> : ''}
              {this.props.newChannel.status === 202 && (
                <Redirect to={ '/profile'}/>
              )}
              <span className='go-back'>
                  <NavLink to={routeCodes.CHANNELS}>
                    { 'go Back!' }
                  </NavLink>
              </span>

            </form>
        );
    }

    render () {
        return (
            <div>
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
          newChannel: state.newChannel,
       };
}

export default connect(mapStateToProps)(ChannelNew);
