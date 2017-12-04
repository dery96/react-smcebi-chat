import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
        <button
          className="btn btn-primary"
          onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

export default Button;
