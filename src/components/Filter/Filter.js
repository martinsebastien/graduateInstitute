import React, { Component, PropTypes } from 'react';

import { FaCaretUp, FaCaretDown } from 'react-icons/lib/fa';
import style from './filter.scss';

import FilterMenu from '../FilterMenu';

export default class Filter extends Component {

  static propTypes = {
    filterSubmenuToggle: PropTypes.func.isRequired,
    store: PropTypes.shape({
      filter: PropTypes.shape({
        submenuOpen: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  handleToggleClick = (e) => {
    e.preventDefault();
    this.props.filterSubmenuToggle();
  }

  render() {
    const { submenuOpen } = this.props.store.filter;
    return (
      <div className={style.filter}>
        <button onClick={this.handleToggleClick} className="filter-toggle">
          FILTER
          {submenuOpen ? <FaCaretUp /> : <FaCaretDown />}
        </button>
        {submenuOpen && (
          <div className="filter-submenu">
            <FilterMenu {...this.props} />
          </div>
        )}
      </div>
    );
  }

}
