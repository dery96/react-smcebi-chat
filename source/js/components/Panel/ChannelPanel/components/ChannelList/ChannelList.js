import {React, { Component } } from 'react';

import { SearchBar } from '../../components/SearchBar';

class ChannelList extends Component {

  render() {
    <div className="col-4">
      <SearchBar />
      <UserList />
      <hr />
      <ChannelList />
    </div>
  };
}

export default ChannelList;
