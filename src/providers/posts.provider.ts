import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { HttpService } from '../services/http.service';

import { Author } from '../models/author';
import { Category } from '../models/category';
import { Thumbnail } from '../models/thumbnail';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

export { Author, Category, Thumbnail, Comment, Post };

@Injectable()
export class PostsProvider {

  constructor(
    public httpService: HttpService,
  ) {}

  all(): Observable<Post[]> {
    return this.httpService
      .get('/posts?_embed')
      .map(data => data.json())
      .map(posts => posts.map(post => Post.build(post)));
  }

  pinned(): Observable<Post[]> {
    return this.httpService
      .get('/posts?_embed&sticky=true')
      .map(data => data.json())
      .map(posts => posts.map(post => Post.build(post)));
  }

  filter(search?: String, categories: Category[] = [], page: Number = 1, perPage: Number = 10) {

    // Base
    let endpoint = '/posts?_embed';

    // Page
    endpoint += `&perPage=${perPage}&page=${page}`;

    // Search
    if (search) endpoint += `&search=${search}`;

    // Categories
    if (categories.length) endpoint += `&categories=${categories.map(category => category.id).join(',')}`;

    return this.httpService
      .get(encodeURI(endpoint))
      .map(data => data.json())
      .map(posts => posts.map(post => Post.build(post)));
  }

  get(id: string): Observable<Post> {
    return this.httpService
      .get(`/posts/${id}?_embed`)
      .map(data => data.json())
      .map(post => Post.build(post));
  }

}
