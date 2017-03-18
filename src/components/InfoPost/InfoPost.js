import React, { Component } from 'react';

import style from './info-post.scss';

export default class InfoPost extends Component {

  state = {};

  render() {
    return (
      <div className={style.nav}>
        <Container>
          <Search {...this.props} />
          <div className="tmp-col">
            <div className="tmp-row50"><Filter {...this.props} /></div>
            <div className="tmp-row50"><Notify /></div>
          </div>
        </Container>
      </div>
    );
  }

}
