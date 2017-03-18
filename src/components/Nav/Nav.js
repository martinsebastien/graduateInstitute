import React, { Component, PropTypes } from 'react';

import style from './nav.scss';

import Container from '../Container';
import Search from '../Search';
import Filter from '../Filter';
import Notify from '../Notify';

export default class Nav extends Component {

  static propTypes = {
    store: PropTypes.shape({
      notification: PropTypes.shape({
        available: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  render() {
    const { available } = this.props.store.notification;

    return (
      <div className={style.nav}>
        <Container>
          <Search {...this.props} />
          <div className="tmp-col">
            <div className="tmp-row50">
              <Filter {...this.props} />
            </div>
            {available ? (
              <div className="tmp-row50">
                <Notify {...this.props} />
              </div>
            ) : (
              <div className="tmp-row50">
                <p className="notification-disabled">Push notifications aren&apos;t available</p>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }

}
