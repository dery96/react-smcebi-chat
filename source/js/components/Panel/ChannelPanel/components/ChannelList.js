import React, { Component } from 'react';
export class ChannelList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userChannelsList: {
                1: 'firstChannel',
                2: 'secondChannel',
                3: 'thirdChannel',
                4: 'fourthChannel'
            }
        }
    }

  render() {
      return(
          <div className="mt-2">
              <div className='channel-title'>
                  Channels
              </div>
              <ul>
                  <li>{ this.state.userChannelsList[1] }</li>
                  <li>{ this.state.userChannelsList[2] }</li>
                  <li>{ this.state.userChannelsList[3] }</li>
                  <li>{ this.state.userChannelsList[4] }</li>
              </ul>
          </div>
      );
  };
}

export default ChannelList;
