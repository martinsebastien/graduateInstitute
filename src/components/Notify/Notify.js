import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import style from './notify.scss';

export default class Notify extends Component {

  static propTypes = {
    notificationSubscribe: PropTypes.func.isRequired,
    notificationUnsubscribe: PropTypes.func.isRequired,
    store: PropTypes.shape({
      notification: PropTypes.shape({
        subscribed: PropTypes.bool.isRequired,
        processing: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  componentWillMount() {
    this.inputId = _.uniqueId('notify-');
  }

  inputId = '';
  checkbox;

  handleChange = (e) => {
    const { checked } = e.target;
    const { notificationSubscribe, notificationUnsubscribe } = this.props;

    if (checked) notificationSubscribe();
    else notificationUnsubscribe();
  };

  render() {
    const { subscribed, processing } = this.props.store.notification;

    return (
      <div className={style.notify}>
        <input type="checkbox" id={this.inputId} onChange={this.handleChange} checked={subscribed} value={subscribed ? 'on' : 'off'} disabled={processing} />
        <label htmlFor={this.inputId} />
        <p>{subscribed ? 'You\'re going to be notified on new post' : 'Get notified when there is a new post'}</p>
      </div>
    );
  }

}
