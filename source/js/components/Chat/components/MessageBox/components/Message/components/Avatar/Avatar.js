import React, { Component } from 'react';

import bookImg from '../../../../../../../../../assets/img/default-avatar.jpg';

export class Avatar extends Component {

  render() {
    return (
        <span className="">
            <img src={ bookImg } alt='' className='ImgExample' />
        </span>
    );
  }

}

export default Avatar;

// WEBSOCKET THAT ADD
// <Message author={ this.state.author }
//            message={ this.state.message }
//            date={ this.state.date }/>
