import React, { Component, PropTypes } from 'react';
import { FaSpinner } from 'react-icons/lib/fa';

import Container from './Container';
import Article from './Article';
import Footer from './Footer';

const style = {
  loading: {
    color: '#e3051a',
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
    textAlign: 'center',
  },
};

export default class ArticlePage extends Component {

  static propTypes = {
    loadPost: PropTypes.func.isRequired,
    store: PropTypes.shape({
      post: PropTypes.object,
      loadPost: PropTypes.shape({
        processing: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {};

  componentWillMount() {
    const { params: { id }, loadPost } = this.props;
    loadPost(id);
  }

  render() {
    const { post, loadPost: { processing } } = this.props.store;

    // TODO: handle processing for show loader
    let content;
    if (processing) {
      content = (
        <div style={style.loading}>
          <FaSpinner size={60} />
        </div>
      );
    } else if (post) content = <Article full post={post} />;
    else content = <p>TODO: No Article Error</p>;

    return (
      <div>
        <Container>
          {content}
        </Container>
        <Footer />
      </div>
    );
  }

}
