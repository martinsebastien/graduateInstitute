import React, { Component } from 'react';

import Container from '../Container';
import SectionTitle from '../SectionTitle';

export default class ArticlesPage extends Component {

  state = {};

  render() {
    return (
      <div className={style.articles}>
        <Container>
          <SectionTitle>Pinned Articles</SectionTitle>
          <SectionTitle>All Articles</SectionTitle>
        </Container>
      </div>
    );
  }

}
