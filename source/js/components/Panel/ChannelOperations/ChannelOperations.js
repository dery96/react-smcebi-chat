import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeWsConnection } from 'actions';

import './ChannelOperations.scss';
import { ChannelActions } from './components/ChannelActions';
import { ChannelUsers } from './components/ChannelUsers';

@connect(state => ({

}))

export class ChannelOperations extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props
    dispatch( closeWsConnection() );
  }

  render() {
    const { dispatch, user, channels } = this.props
    return (
      <div className='operations'>
        <div className='channel-title'>
          { this.props.user.activeChannel.name }
      </div>
        <ChannelActions />
        <ChannelUsers />
        <button className="col disconnect btn"
                type="submit"
                name="button"
                onClick = { this.handleClick }> Disconenct </button>
     </div>
    );
  }
}

ChannelOperations.propTypes = {};
ChannelOperations.defaultProps = {};

export default connect(null)(ChannelOperations);
