import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import CircleSvg from '../../../assets/svg/circle.svg';
import SquareSvg from '../../../assets/svg/square.svg';
import TriangleSvg from '../../../assets/svg/triangle.svg';
import bookImg from '../../../assets/img/book2.jpg';
import axios from 'axios';

import './Dashboard.scss';
@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: '',
        username: 'dery',
        password: '111',
    }
    this.handleLoginClick.bind(this);

  }

  handleLoginClick() {
    // e.preventDefault();
    return console.log("aaaaaa");
  }
  render() {

    return (
      <div className='row row-column dashboard'>
        <h1>Welcome</h1>
        <p>
          Welcome, welcome to our chat application to use it you need to create new account. If you make it you'll receive great previelege to use this site
          and chat with <strong>huno92</strong> and <strong>dery96</strong>. Remember to join conversation you need to find channel that interest you (or create new) then
          you can talk till end of you silly life.
        </p>
        <h3>Documentation</h3>
        <p className="">
            That simple app is written using ReactJS libary and Redux that's for the front-end. We also managed to create simple Java server that handle
            HTTP Request (something like Restful Web Api).
        </p>

        <p className="">
            Visit our Site on <a href="" className="">Github</a> project.
        </p>
        <button
          onClick={ this.handleLoginClick }
        >
          Get async data
        </button>
      </div>
    );
  }
}
