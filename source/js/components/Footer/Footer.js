import React, {Component} from 'react';
import './Footer.scss';


import FooterMenu from './FooterMenu';

class Footer extends Component {
    render() {
        return (
            <footer>
                <FooterMenu/>
                <div className="copyright">
                    COPYRIGHT 2017 BY DOMINIK.
                </div>
            </footer>
        );
    }
}

export default Footer;