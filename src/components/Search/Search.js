import React, { Component, PropTypes } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/lib/fa';
import style from './search.scss';

export default class Search extends Component {

  static propTypes = {
    searchTermChange: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    store: PropTypes.shape({
      search: PropTypes.shape({
        term: PropTypes.string.isRequired,
        processing: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.store.search.processing) this.props.search();
  }

  handleChange = () => this.props.searchTermChange(this.search.value);

  render() {
    const { term, processing } = this.props.store.search;

    return (
      <div className={style.search}>
        <form action="" onSubmit={this.handleSubmit}>
          <input disabled={processing} ref={(input) => { this.search = input; }} onChange={this.handleChange} type="text" placeholder="SEARCH" value={term} />
          {processing ?
            <div className="search-icon"><FaSpinner /></div>
            :
            <button className="search-icon" type="submit"><FaSearch /></button>}
        </form>
      </div>
    );
  }


}
