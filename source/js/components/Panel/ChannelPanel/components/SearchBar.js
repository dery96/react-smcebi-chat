import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { subscribeChannelAction } from 'actions';

@connect(state => ({
  channels: state.app.get('channels'),
  user: state.app.get('user'),
}))
export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: '',
            currentDisplayed: [],
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.renderChannels = this.renderChannels.bind(this);
        this.filterChannels = this.filterChannels.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this)
    }

    onInputChange(e) {
        e.preventDefault();
        this.setState( {[e.target.name]: e.target.value}, this.filterChannels)

    }

    filterChannels() {
        if (this.state.searchInput !== '') {
            let filteredChannels = this.props.channels.filter((value, index, channels) => {
                return value.name.toString().toLowerCase()
                       .includes(this.state.searchInput.toString().toLowerCase())
            })
            this.setState( { currentDisplayed: filteredChannels })
        } else {
            this.setState( { currentDisplayed: [] })
        }
    }
    renderChannels() {
        return this.state.currentDisplayed.map( (channel, key) => {
            return (
                <a className='result'
                    key={channel.id}
                    name={channel.name}
                    onClick={ () => this.handleSubscribe(channel.id, channel.name) }
                    >
                    <span key={key}
                          className='name'>{channel.name}
                    <span className='size'>({channel.size})</span></span>
                    <span className='join'>
                        Join
                    </span>
                </a>
            );
        });
    }

    handleSubscribe(channel_id, name) {
        const { dispatch, user } = this.props;

        dispatch( subscribeChannelAction(channel_id, this.props.user.id, this.props.user.token) )
    }
    render () {
        const { channels, user } = this.props;
        return(
            <form className='search-bar'>
                <input type="text"
                    name='searchInput'
                    value={ this.state.searchInput }
                    onChange={ this.onInputChange }
                    placeholder='Search to join channel...'
                    autoComplete='off'
                />
            <div className="results">
                { this.renderChannels() }
            </div>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {
        channels: state.channels,
        user: state.user,
    };

}
export default connect(mapStateToProps)(SearchBar);
