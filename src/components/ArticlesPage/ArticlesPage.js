import React, { Component } from 'react';

import Container from '../Container';
import SectionTitle from '../SectionTitle';
import PinnedArticle from '../PinnedArticle';
import InfiniteLoader from '../InfiniteLoader';
import Article from '../Article';

export default class ArticlesPage extends Component {

  state = {};

  render() {
    return (
      <div>
        <Container>
          <SectionTitle>Pinned Articles</SectionTitle>
          <PinnedArticle />
          <PinnedArticle />
          <SectionTitle>All Articles</SectionTitle>
          <Article />
          <Article />
          <InfiniteLoader />
        </Container>
      </div>
    );
  }

}
