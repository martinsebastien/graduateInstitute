import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';

import style from './infinite-loader.scss';

export default class InfiniteLoader extends Component {

  static propTypes = {
    loadMorePosts: PropTypes.func.isRequired,
    store: PropTypes.shape({
      loadMorePosts: PropTypes.shape({
        processing: PropTypes.bool.isRequired,
        noMore: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { offsetTop } = this.element;
    const { scrollY, innerHeight } = window;
    if (scrollY + innerHeight >= offsetTop) this.triggerLoadMore();
  }

  triggerLoadMore = () => {
    const { noMore, processing } = this.props.store.loadMorePosts;
    if (!noMore && !processing) this.props.loadMorePosts();
  }

  render() {
    const { noMore, processing } = this.props.store.loadMorePosts;

    let content;
    if (noMore) content = <p>No more articles</p>;
    else if (processing) content = <Loader color="#e3051a">Chargement</Loader>;
    else content = null;

    return (
      <div ref={element => (this.element = element)} className={style.infiniteLoader}>
        {content}
      </div>
    );
  }
}
