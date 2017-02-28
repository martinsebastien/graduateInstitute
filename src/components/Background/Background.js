import React, { Component } from 'react';

import style from './background.scss';
import background from './background.jpg';

export default class Background extends Component {

  state = {};

  render() {
    return (
      <div className={style.background}>
        <div className="gradient">
          <img src={background} alt="" />
        </div>
      </div>
    );
  }

}
