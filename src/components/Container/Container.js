import React, { Component, PropTypes } from 'react';

import style from './container.scss';

export default class Container extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {};

  render() {
    return <div className={style.container}>{this.props.children}</div>;
  }

}
