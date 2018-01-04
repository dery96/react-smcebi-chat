import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ChannelList } from './components/ChannelList';
import { ActiveUsers } from './components/ActiveUsers';
import { SearchBar } from './components/SearchBar';
import './ChannelPanel.scss';

export class ChannelPanel extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    const { onlineUsers,user } = this.props;
    return (
      <div className='channel-panel'>
        <div className='channel-title'>
            Panel
        </div>
        <SearchBar />
        <div className='channel-new'>Or create new <strong>instead!</strong></div>
        <ChannelList user={user} />
        <ActiveUsers onlineUsers={onlineUsers} />
      </div>
    );
  }
}

ChannelPanel.propTypes = {};
ChannelPanel.defaultProps = {};

export default ChannelPanel;
