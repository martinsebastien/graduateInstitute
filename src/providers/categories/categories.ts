import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { WpHttpService } from '../../services/wp-http/wp-http';

import { Category } from '../../models/category';

export { Category }

@Injectable()
export class CategoriesProvider {

  constructor(
    public http: WpHttpService,
  ) {}

  all(): Observable<Category[]> {
    return this.http
      .get(`/categories`)
      .map(response => response.json())
      .map(data => data.map(d => Category.build(d)));
  }

}
