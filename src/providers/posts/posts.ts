import { Injectable } from '@angular/core';
import { WpHttpService } from '../../services/wp-http/wp-http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Post } from '../../models/post';

export { Post }

@Injectable()
export class PostsProvider {

  constructor(
    public http: WpHttpService,
  ) {}

  all(): Observable<Post[]> {
    return this.http
      .get(`/posts?_embed`)
      .map(response => response.json())
      .map(data => data.map(d => Post.build(d)));
  }

  query({ search, categories = [], page = 1, perPage = 10 }: any): Observable<Post[]> {

    let url = '/posts?_embed';

    url += `&per_page=${perPage}&page=${page}`;
    if (search) url += `&search=${search}`;
    if (categories.length) url += `&categories=${categories.map(c => c.id).join(',')}`;

    return this.http
      .get(encodeURI(url))
      .map(response => response.json())
      .map(data => data.map(d => Post.build(d)));
  }

  pinned(): Observable<Post[]> {
    return this.http
      .get(`/posts?_embed&sticky=true`)
      .map(response => response.json())
      .map(data => data.map(d => Post.build(d)));
  }

  get(id: string): Observable<Post> {
    return this.http
      .get(`/posts/${id}?_embed`)
      .map(response => response.json())
      .map(data => Post.build(data));
  }

}
