import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import style from './filter-menu.scss';

export default class FilterMenu extends Component {

  state = {};

  componentWillMount() {
    this.selectId = uniqueId('filtermenu-');
  }

  selectId = '';
  idFor(filterName) {
    return `${filterName}-${this.selectId}`;
  }

  selectId = '';

  render() {
    return (
      <div className={style.filterMenu}>
        <ul>
          <li>
            <input type="checkbox" name="filter[bachelors]" id={this.idFor('bachelors')} />
            <label htmlFor={this.idFor('bachelors')}>Bachelors</label>
          </li>
          <li>
            <input type="checkbox" name="filter[masters]" id={this.idFor('masters')} />
            <label htmlFor={this.idFor('masters')}>Masters</label>
          </li>
          <li>
            <input type="checkbox" name="filter[phd]" id={this.idFor('phd')} />
            <label htmlFor={this.idFor('phd')}>Phd</label>
          </li>
        </ul>
      </div>
    );
  }

}
