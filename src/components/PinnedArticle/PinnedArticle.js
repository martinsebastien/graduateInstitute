/* eslint react/no-danger: "off" */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FaAlignJustify } from 'react-icons/lib/fa';
import moment from 'moment';

import style from './pinned-article.scss';

export default class PinnedArticle extends Component {

  static propTypes = {
    post: PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
      })).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      thumbnail: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  render() {
    const { post } = this.props;
    const url = `/article/${post.id}`;

    return (
      <div className={style.pinnedArticle}>
        <div className="thumbnail">
          <img src={post.thumbnail.src} alt={post.thumbnail.alt} />
        </div>
        <div className="content">
          <Link to={url}><h2 dangerouslySetInnerHTML={{ __html: post.title }} /></Link>
          <small>{moment(post.date).format('dddd, Do MMMM Y')}</small>
        </div>
        <div className="readmore">
          <Link to={url}>
            <FaAlignJustify /> READ MORE
          </Link>
        </div>
      </div>
    );
  }

}
