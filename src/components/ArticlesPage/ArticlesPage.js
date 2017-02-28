import React, { Component } from 'react';

import Container from '../Container';
import SectionTitle from '../SectionTitle';
import PinnedArticle from '../PinnedArticle';
import InfiniteLoader from '../InfiniteLoader';

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
          <InfiniteLoader />
        </Container>
      </div>
    );
  }

}
