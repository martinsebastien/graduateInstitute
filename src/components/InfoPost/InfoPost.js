import React, { Component, PropTypes } from 'react';

import style from './info-post.scss';

export default class InfoPost extends Component {

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
    return (
      <div className={style.container}>
        <div className="profilPic"><img src={this.props.post.author.avatar} alt={this.props.post.author.name} /></div>

        <div className="containerInfoPost">
          <div className="profilContainer">
            <div className="authorContainer">
              <p className="postText">Posted by</p>
              <p>{this.props.post.author.name}</p>
            </div>
          </div>

          <div className="categoryContainer">
            <div className="authorContainer">
              <p className="postText">Categories</p>
              <p>{this.props.post.categories.map(c => c.name).join(', ')}</p>
            </div>
          </div>

        </div>
      </div>

    );
  }

}
