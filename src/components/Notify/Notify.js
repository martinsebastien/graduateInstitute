import React, { Component } from 'react';
import _ from 'lodash';

import style from './notify.scss';

export default class Notify extends Component {

  state = {};

  componentWillMount() {
    this.inputId = _.uniqueId('notify-');
  }

  inputId = '';

  render() {
    return (
      <div className={style.notify}>
        <input type="checkbox" id={this.inputId} />
        <label htmlFor={this.inputId} />
        <p>Get notified when there is a new post</p>
      </div>
    );
  }

}
