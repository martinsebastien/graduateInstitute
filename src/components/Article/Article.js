import React, { Component } from 'react';

import style from './Article.scss';

import profil from './profil.jpg';

export default class Article extends Component {

  state = {};

  render() {
    return (
      <div className={style.article}>
        <div className="imgContainer"><img src="http://lorempixel.com/1200/800/people" alt="Article illustration" /></div>
        <div className="contentContainer">
          <h2>Discover the experience of studying anthropology and sociology
          at the graduate institute, Geneva</h2>
          <p className="date">February 12, 2017</p>
          <p className="textContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="blockContainer">
          <div className="profilContainer">
            <div className="profilPic"><img src={profil} alt="Profile" /></div>
            <div className="authorContainer">
              <p className="postText">Posted by</p>
              <p>Clément Jaquier</p>
            </div>
          </div>
          <div className="categoryContainer">
            <div className="alignCategory">
              <p className="postText">Categories</p>
              <p>Masters, Bachelors</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
