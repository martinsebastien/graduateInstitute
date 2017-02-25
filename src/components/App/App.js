import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {};

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}
