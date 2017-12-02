import React, { Component } from 'react';
import Routes from 'config/routes';

import Menu from 'components/Global/Menu';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
            <div className='Page'>
              <Routes />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}
