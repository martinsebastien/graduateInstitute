/* eslint react/no-danger: "off" */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Youtube from 'react-youtube';
import moment from 'moment';
import { FaAlignJustify } from 'react-icons/lib/fa';
// import { FaAlignJustify, FaFile, FaLink } from 'react-icons/lib/fa';

import InfoPost from '../InfoPost';

import style from './Article.scss';

export default class Article extends Component {

  static propTypes = {
    full: PropTypes.bool,
    post: PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
      })).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      thumbnail: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    full: false,
  };

  state = {};

  thumbnail() {
    const { post } = this.props;

    if (post.videoUrl) {
      return (
        <div className="imgContainer">
          <Youtube
            videoId={post.videoUrl}
            opts={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      );
    } else if (post.thumbnail.src) {
      return (
        <div className="imgContainer">
          <img src={post.thumbnail.src} alt={post.thumbnail.alt} />
        </div>
      );
    }
    return null;
  }

  render() {
    const { post, full } = this.props;
    const url = `/article/${post.id}`;

    return (
      <div className={style.article}>
        {this.thumbnail()}
        <div className="contentContainer">
          {full ?
            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
            :
            <h2><Link to={url} dangerouslySetInnerHTML={{ __html: post.title }} /></h2>
          }
          <p className="date">{moment(post.date).format('dddd, Do MMMM Y')}</p>
          <div className="textContent" dangerouslySetInnerHTML={{ __html: full ? post.content : post.excerpt }} />
          {!full && (<div className="readmore">
            <Link to={url}>
              <FaAlignJustify /> READ MORE
            </Link>
          </div>)}

        </div>
        <InfoPost post={post} />
      </div>
    );
  }
}
