import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './header.scss';
import logo from './logo.png';

import Container from '../Container';

export default class Header extends Component {

  state = {};

  render() {
    return (
      <div className={style.header}>
        <Container>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          <h1>The Academic Adviser</h1>
        </Container>
      </div>
    );
  }

}
