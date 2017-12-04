import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from 'config/routes';

import './FooterMenu.scss';


class FooterMenu extends Component {
  render() {
    return (
        <div className="footer-menu">
          <NavLink
            activeClassName='menu-item-active'
            className='menu-item'
            exact
            to={routeCodes.DASHBOARD}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='menu-item-active'
            className='menu-item'
            to={routeCodes.CHANNELS}
          >
            Channels
          </NavLink>
          <NavLink
            activeClassName='menu-item-active'
            className='menu-item'
            to={routeCodes.ABOUT}
          >
            About
          </NavLink>
          <NavLink
            activeClassName='menu-item-active'
            className='menu-item'
            to={routeCodes.PROFILE}
          >
            Profile
          </NavLink>
        </div>
    );

  }
}

export default FooterMenu;
