import React, { Component } from 'react';

import style from './background.scss';
import logo from './background.jpg';

export default class Background extends Component {

  state = {};

  render() {
    return (
      <div className={style.background}>
        <div className="gradient" />
        <img className="imgBg" src={logo} alt="Graduate institute background" />
      </div>
    );
  }

}
