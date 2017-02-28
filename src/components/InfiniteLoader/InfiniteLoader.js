import React, { Component } from 'react';
import Loader from 'react-loader';

import style from './infinite-loader.scss';

export default class InfiniteLoader extends Component {

  state = {};

  render() {
    return (
      <div className={style.infiniteLoader}>
        <Loader
          color="#e3051a"
        >Chargement</Loader>
      </div>
    );
  }
}
