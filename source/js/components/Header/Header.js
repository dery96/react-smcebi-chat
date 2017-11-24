import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './Header.scss';


import Menu from './components/Menu';
import Logo from '../../components/Logo';

class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>
                <Menu/>
            </header>
        );
    }
}

export default Header;