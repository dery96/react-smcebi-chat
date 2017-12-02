import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from 'config/routes';
// import {connect} from 'react-redux';
import './Header.scss';


import Menu from './components/Menu';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="container">
          <div className='row'>
            <div className="logo">
                SMCEBI chat <figcaption>for the people.</figcaption>
            </div>
            <nav>
                <Menu />
                <p className='guest'> You're guest want <NavLink
                      activeClassName='menu-item-active'
                      className='menu-item'
                      exact
                      to={routeCodes.LOGIN}
                    >
                      sign in
                    </NavLink> or <NavLink
                          activeClassName='menu-item-active'
                          className='menu-item'
                          exact
                          to={routeCodes.REGISTER}
                        >
                          sign up
                        </NavLink> ?</p>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
