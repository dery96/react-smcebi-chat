import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ChannelActions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: '',
        }
    }
    render() {
        return (
                <div className="col">
                    <div className='col channel-actions btn-group' data-toggle='buttons'>
                      <label className={ (this.state.channel === '1') ? 'btn active' : 'btn' }>
                        <input
                          key={ 0 }
                          value='M'
                          onChange={ this.onChange }
                          type='radio'
                          name='gender'
                        /> Kick
                      </label>

                      <label className={ (this.state.channel === '2') ? 'btn active' : 'btn' } >
                        <input
                          key={ 1 }
                          value='F'
                          onChange={ this.onChange }
                          type='radio'
                          name='gender'
                        /> Mute
                      </label>

                      <label className={ (this.state.channel === '3') ? 'btn active' : 'btn' } >
                        <input
                          key={ 1 }
                          value='F'
                          onChange={ this.onChange }
                          type='radio'
                          name='gender'
                        /> Microphone
                      </label>
                      <label className={ (this.state.channel === '3') ? 'btn active' : 'btn' } >
                        <input
                          key={ 1 }
                          value='F'
                          onChange={ this.onChange }
                          type='radio'
                          name='gender'
                        /> Video
                      </label>
                    </div>
                </div>
        );
    }
}

export default ChannelActions;
