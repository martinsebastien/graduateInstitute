import React, { Component, PropTypes } from 'react';

import Background from './Background';
import Header from './Header';
import Nav from './Nav';
import ShadowMask from './ShadowMask';

export default class Main extends Component {

  static propTypes = {
    loadCategories: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  state = {};

  componentWillMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <div>
        <Background />
        <Header />
        <Nav {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
        <ShadowMask {...this.props} />
      </div>
    );
  }

}
