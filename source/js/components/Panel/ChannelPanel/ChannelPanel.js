import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { ChannelList } from './components/ChannelList';
import { ActiveUsers } from './components/ActiveUsers';
import { SearchBar } from './components/SearchBar';
import './ChannelPanel.scss';

export class ChannelPanel extends Component {
    constructor(props) {
        super(props)
        this.newChannelClick = this.newChannelClick.bind(this)
    }


    newChannelClick() {

        console.log("chcesz utworzyc nowy kanał");

    }
  render() {
    const { onlineUsers, user, channels } = this.props;
    return (
      <div className='channel-panel'>
        <div className='channel-title'>
            Panel
        </div>
        <SearchBar channels={ channels } user={ user } />
        <div className='channel-new'>Or create <span className='click'><NavLink to={`/new/channel`}>new <strong>instead!</strong></NavLink></span></div>
        <ChannelList />
        <ActiveUsers onlineUsers={ onlineUsers } />
      </div>
    );
  }
}

ChannelPanel.propTypes = {};
ChannelPanel.defaultProps = {};

export default ChannelPanel;
