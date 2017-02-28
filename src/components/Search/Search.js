import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import { FaSearch } from 'react-icons/lib/fa';
import style from './search.scss';

export default class Search extends Component {

  state = {};

  componentWillMount() {
    this.searchId = uniqueId('search-');
  }

  searchId = '';

  render() {
    return (
      <div className={style.search}>
        <form action="" onSubmit="">
          <input id={this.searchId} type="text" placeholder="SEARCH" />
          <label htmlFor={this.searchId}><FaSearch className="search-icon" /></label>
        </form>
      </div>
    );
  }


}
