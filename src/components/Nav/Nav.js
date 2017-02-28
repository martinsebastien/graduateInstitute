import React, { Component } from 'react';

import style from './nav.scss';

import Container from '../Container';
import Search from '../Search';
import Filter from '../Filter';
import Notify from '../Notify';

export default class Nav extends Component {

  state = {};

  render() {
    return (
      <div className={style.nav}>
        <Container>
          <Search />
          <div className="tmp-col">
            <div className="tmp-row50"><Filter /></div>
            <div className="tmp-row50"><Notify /></div>
          </div>
        </Container>
      </div>
    );
  }

}
