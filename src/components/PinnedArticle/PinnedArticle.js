import React, { Component } from 'react';
import { Link } from 'react-router';
import { FaAlignJustify } from 'react-icons/lib/fa';

import style from './pinned-article.scss';

export default class PinnedArticle extends Component {

  state = {};

  render() {
    return (
      <div className={style.pinnedArticle}>
        <div className="thumbnail">
          <img src="http://lorempixel.com/400/200/people/FakeImage/" alt="" />
        </div>
        <div className="content">
          <Link to="/"><h2>Summer & Winter Programme on the United Nations and Global Challenges</h2></Link>
          <small>February 12, 2017</small>
        </div>
        <div className="readmore">
          <Link to="/">
            <FaAlignJustify /> READ MORE
          </Link>
        </div>
      </div>
    );
  }

}
