import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
    render () {
        return(
            <form className='search-bar'>
                <input type="text"
                    placeholder='Search to join channel...'
                />
            </form>
        );
    }
}

export default SearchBar;
