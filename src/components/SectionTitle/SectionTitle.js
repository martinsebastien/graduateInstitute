import React, { Component, PropTypes } from 'react';

import style from './section-title.scss';

export default class SectionTitle extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  state = {};

  render() {
    return <div className={style.sectionTitle}><span>{this.props.children}</span></div>;
  }

}
