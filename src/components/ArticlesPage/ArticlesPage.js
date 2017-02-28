import React, { Component } from 'react';

import Container from '../Container';
import SectionTitle from '../SectionTitle';
import InfiniteLoader from '../InfiniteLoader';

export default class ArticlesPage extends Component {

  state = {};

  render() {
    return (
      <div>
        <Container>
          <SectionTitle>Pinned Articles</SectionTitle>
          <SectionTitle>All Articles</SectionTitle>
          <InfiniteLoader />
        </Container>
      </div>
    );
  }

}
