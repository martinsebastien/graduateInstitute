import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { WpHttpService } from '../../services/wp-http/wp-http';

import { Comment } from '../../models/comment';

export { Comment };

@Injectable()
export class CommentsProvider {

  constructor(
    public http: WpHttpService,
  ) {}

  create(data): Observable<Comment> {
    return this.http.post(`/comments`, data)
      .map(response => response.json())
      .map(data => Comment.build(data));
  }

}
