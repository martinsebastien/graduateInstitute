import React, { Component, PropTypes } from 'react';
import { FaSpinner } from 'react-icons/lib/fa';
import _ from 'lodash';

import style from './filter-menu.scss';

export default class FilterMenu extends Component {

  static propTypes = {
    filter: PropTypes.func.isRequired,
    filterCategoryToggle: PropTypes.func.isRequired,
    store: PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
      filter: PropTypes.shape({
        processing: PropTypes.bool.isRequired,
        categories: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        filteredBy: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    }).isRequired,
  };

  handleFilterClick = (e) => {
    e.preventDefault();
    this.props.filter();
  }

  handleCategoryClick = (e, id) => {
    e.preventDefault();
    this.props.filterCategoryToggle(id);
  }

  filterButton = () => {
    const { categories, filteredBy, processing } = this.props.store.filter;

    if (processing) {
      return (
        <div className="filter-loading">
          <FaSpinner />
        </div>
      );
    }

    return (
      _.difference(categories, filteredBy).length ||
      _.difference(filteredBy, categories).length
    ) ? <button className="filter-ok" onClick={this.handleFilterClick}>OK</button> : null;
  }

  categoryItem = (category) => {
    const checked = !!this.props.store.filter.categories.find(c => c === category.id);

    return (
      <li key={category.id}>
        <a
          href=""
          onClick={e => this.handleCategoryClick(e, category.id)}
          className={checked ? 'checked' : null}
        >{category.name}</a>
      </li>
    );
  }

  render() {
    return (
      <div className={style.filterMenu}>
        {this.filterButton()}
        <ul>
          {this.props.store.categories.map(this.categoryItem)}
        </ul>
      </div>
    );
  }

}
