import React, { Component } from 'react';

import { FaCaretUp, FaCaretDown } from 'react-icons/lib/fa';
import style from './filter.scss';

import FilterMenu from '../FilterMenu';

export default class Filter extends Component {

  constructor() {
    super();
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  state = {
    subMenuOpen: false,
  };

  toggleSubMenu() {
    this.setState(s => ({ subMenuOpen: !s.subMenuOpen }));
  }

  render() {
    return (
      <div className={style.filter}>
        <button onClick={this.toggleSubMenu} className="filter-toggle">
          FILTER
          {this.state.subMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
        </button>
        {this.state.subMenuOpen ? (
          <div className="filter-submenu">
            <button className="filter-ok">OK</button>
            <FilterMenu />
          </div>
        ) : null}
      </div>
    );
  }

}
