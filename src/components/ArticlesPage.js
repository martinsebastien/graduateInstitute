import React, { Component, PropTypes } from 'react';
import { FaSpinner } from 'react-icons/lib/fa';

import Container from './Container';
import SectionTitle from './SectionTitle';
import PinnedArticle from './PinnedArticle';
import Article from './Article';
import InfiniteLoader from './InfiniteLoader';
import Footer from './Footer';

const style = {
  loading: {
    color: '#e3051a',
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
    textAlign: 'center',
  },
  empty: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 30,
  },
};

export default class ArticlesPage extends Component {

  static propTypes = {
    loadPosts: PropTypes.func.isRequired,
    loadPinposts: PropTypes.func.isRequired,
    store: PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
      pinposts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
      loadPosts: PropTypes.shape({
        processing: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.loadPosts();
    this.props.loadPinposts();
  }

  pinposts() {
    const { pinposts } = this.props.store;

    if (!pinposts.length) {
      return null;
    }

    return (
      <div>
        <SectionTitle>Pinned Articles</SectionTitle>
        {pinposts.map(post => <PinnedArticle post={post} key={post.id} />)}
      </div>
    );
  }

  posts() {
    const { posts, loadPosts: { processing } } = this.props.store;

    if (processing && !posts.length) {
      return (
        <div style={style.loading}>
          <FaSpinner size={60} />
        </div>
      );
    }

    if (!posts.length) {
      return (
        <div style={style.empty}>
          <p>No article found</p>
        </div>
      );
    }

    return (
      <div>
        <SectionTitle>All Articles</SectionTitle>
        {posts.map(post => <Article post={post} key={post.id} />)}
        <InfiniteLoader {...this.props} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Container>
          {this.pinposts()}
          {this.posts()}
        </Container>
        <Footer />
      </div>
    );
  }

}

