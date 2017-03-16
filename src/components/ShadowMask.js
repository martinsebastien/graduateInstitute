import React, { Component, PropTypes } from 'react';

export default class ShadowMask extends Component {

  static propTypes = {
    filterSubmenuClose: PropTypes.func.isRequired,
    store: PropTypes.shape({
      filter: PropTypes.shape({
        submenuOpen: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  handleClick = (e) => {
    e.preventDefault();
    this.props.filterSubmenuClose();
  };

  render() {
    const { submenuOpen } = this.props.store.filter;

    const style = {
      display: submenuOpen ? 'block' : 'none',
      position: 'fixed',
      border: 0,
      zIndex: 1000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,.4)',
    };

    return <button style={style} onClick={this.handleClick} />;
  }

}
