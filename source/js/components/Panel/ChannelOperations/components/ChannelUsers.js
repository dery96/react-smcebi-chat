import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({
  activeUser: [...state.app.get('messages')].pop(),
}))
export class ChannelUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelTitle: 'Looby',
      channelOwner: 1,
    }
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers() {
      if (this.props.activeUser) {
          return this.props.activeUser.userlist.map( (activeUser, index) => {
              return (
                  <li key={index}> { activeUser } </li>
              );
          });
      }
  }

  render() {
      const { activeUser } = this.props;
    return (
        <div>
            <div className='col channel-title'>Active Users:</div>
            <div className='col channel-users'>
                  <ul className=''>
                      { this.renderUsers() }
                 </ul>
            </div>
        </div>
    );
  }
}

ChannelUsers.propTypes = {};
ChannelUsers.defaultProps = {};
function mapStateToProps(state) {
    return {
            activeUser: [...state.message].pop(),
            user: state.user,
         };
}
export default connect(mapStateToProps)(ChannelUsers);
