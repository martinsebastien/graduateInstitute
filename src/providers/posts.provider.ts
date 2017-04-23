import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { HttpService } from '../services/http.service';

import { Author } from '../models/author';
import { Category } from '../models/category';
import { Thumbnail } from '../models/thumbnail';
import { Post } from '../models/post';

export { Author, Category, Thumbnail, Post };

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

  get(id: string): Observable<Post> {
    return this.httpService
      .get(`/posts/${id}?_embed`)
      .map(data => data.json())
      .map(post => Post.build(post));
  }

}
