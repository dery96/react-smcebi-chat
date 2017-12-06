import React, { Component } from 'react';

export class ActiveUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userActive: {
                1: 'Jedrek',
                2: 'Bezi',
                3: 'Zdzislaw',
                4: 'Maciek'
            }
        }
    }

  render() {
      return(
          <div className="mt-2">
              <div className='channel-title'>
                  Online
              </div>
              <div>
                  { this.state.userActive[1] }
                  { this.state.userActive[2] }
                  { this.state.userActive[3] }
              </div>
          </div>
      );
  };
}

export default ActiveUsers;
