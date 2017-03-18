/* eslint react/no-danger: "off" */
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import InfoPost from '../InfoPost'

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

  static defaultProps = {
    full: false,
  };

  state = {};

  render() {
    const { post, full } = this.props;

    return (
      <div className={style.article}>
        {post.thumbnail.src && <div className="imgContainer"><img src={post.thumbnail.src} alt={post.thumbnail.alt} /></div>}
        <div className="contentContainer">
          <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          <p className="date">{moment(post.date).format('dddd, Do MMMM Y')}</p>
          <div className="textContent" dangerouslySetInnerHTML={{ __html: full ? post.content : post.excerpt }} />
        </div>

        <div className="blockContainer">
          <div className="profilPic"><img src={post.author.avatar} alt={post.author.name} /></div>

          <InfoPost />

          <div className="containerInfoPost">
            <div className="profilContainer">
              <div className="authorContainer">
                <p className="postText">Posted by</p>
                <p>{post.author.name}</p>
              </div>
            </div>
            <div className="categoryContainer">
              <div className="profilPic" />
              <div className="authorContainer">
                <p className="postText">Categories</p>
                <p>{post.categories.map(c => c.name).join(', ')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
