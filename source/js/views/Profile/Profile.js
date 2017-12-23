import React, { Component } from 'react';
import queryForParams from '../../helpers';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
        }
    }

    componentDidMount() {
        const data = {login: 'dery', password: '111'};
        console.log(queryForParams(data))

    }
  render() {
      console.log("TRY DOSMTH!");
    return (
      <div className='profile'>
          console.log("TRY DOSMTH!");
        <h1>About Marvin</h1>

        <p>
          Marvin is internal project by <a href='https://work.co'>Work & Co</a>.
          We love React and use it a lot. So Marvin is meant to be a starting point
          for our React projects. But as we love open source too, it is publicly
          available for anyone interested in using it.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/workco/react-redux-webpack2-boilerplate'>GitHub</a>
        </p>
      </div>
    );
  }
}

export default Profile;
