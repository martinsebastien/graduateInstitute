import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { HttpService } from '../services/http.service';

import { Category } from '../models/category';

export { Category };

@Injectable()
export class CategoriesProvider {

  constructor(
    public httpService: HttpService,
  ) {}

  all(): Observable<Category[]> {
    return this.httpService
      .get('/categories')
      .map(data => data.json())
      .map(posts => posts.map(category => Category.build(category)));
  }

  get(id: string): Observable<Category> {
    return this.httpService
      .get(`/categories/${id}`)
      .map(data => data.json())
      .map(category => Category.build(category));
  }

}
