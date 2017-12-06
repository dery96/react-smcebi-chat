import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { ChannelList } from './components/ChannelList';
import { ActiveUsers } from './components/ActiveUsers';
import { SearchBar } from './components/SearchBar';
import './ChannelPanel.scss';

export class ChannelPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUsers: 'Dery96, Huno92...',
            channelList: '',
        }
    }
  render() {
    return (
      <div className='channel-panel'>
        <div className='channel-title'>
            Panel
        </div>
        <SearchBar />
        <ChannelList />
        <ActiveUsers />
      </div>
    );
  }
}

ChannelPanel.propTypes = {};
ChannelPanel.defaultProps = {};

export default ChannelPanel;
