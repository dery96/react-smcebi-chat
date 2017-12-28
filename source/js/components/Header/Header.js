import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import { connect } from 'react-redux';

import { userLogoutAction } from 'actions'
import './Header.scss';


import Menu from './components/Menu';
@connect(state => ({
  user: state.app.get('user')
}))
class Header extends Component {
    constructor(props) {
      super(props);
      this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick() {
      const { dispatch, user } = this.props;
      dispatch(userLogoutAction(this.props.user.token));
    }

  render() {
    return (
      <div className="header-container">
        <header className="container">
          <div className='row'>
              <div className="logo">
              <NavLink
                to={routeCodes.DASHBOARD}
              >
                SMCEBI chat <figcaption>for the people.</figcaption>
              </NavLink>
            </div>
            <nav>
                <Menu />
                { this.props.user.nickname ?
                    <p className='guest'>
                         Logged as <strong>{this.props.user.nickname}</strong> ({this.props.user.login}) <NavLink
                               activeClassName='menu-item-active'
                               className='menu-item logout'
                               to={routeCodes.DASHBOARD}
                               onClick={ this.logoutClick }
                             >
                               Logout
                           </NavLink>
                    </p>
                    :
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
                 }
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      user: state.user,
      };
}

export default connect(mapStateToProps)(Header)
