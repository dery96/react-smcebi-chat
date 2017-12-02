import React, { Component } from 'react';
import './Footer.scss';
import FooterMenu from "./FooterMenu/FooterMenu";

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
          <footer className='container'>
              <div className='row'>
                  <FooterMenu />
                  <div className='copyright'>
                      Made by a <a href="https://github.com/dery96/" className='author'>Dominik Szyja</a> Copyright 2017
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}

export default Footer;
