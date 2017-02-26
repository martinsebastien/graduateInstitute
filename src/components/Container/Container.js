import React, { Component, PropTypes } from 'react';

import style from './container.scss';

export default class Container extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {};

  render() {
    return (
      <div className={style.container}>
        <div className={style.inner} {...this.props}>
          {this.props.children}
        </div>
      </div>
    );
  }

}
