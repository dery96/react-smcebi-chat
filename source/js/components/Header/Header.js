import React, { Component } from 'react';
// import {connect} from 'react-redux';
import './Header.scss';


import Menu from './components/Menu';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="container">
          <div className='row'>
            <div className="col-2 logo">SMCEBI chat</div>
            <Menu />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
