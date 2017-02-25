import React, { Component, PropTypes } from 'react';

import Header from '../Header';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {};

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }

}
