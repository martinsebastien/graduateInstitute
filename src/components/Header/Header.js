import React, { Component } from 'react';

import style from './header.scss';

import Container from '../Container';
import Logo from '../Logo';

export default class Header extends Component {

  state = {};

  render() {
    return (
      <div className={style.header}>
        <Container>
          <Logo />
          <h1>blog of the Director of Studies</h1>
        </Container>
      </div>
    );
  }

}
