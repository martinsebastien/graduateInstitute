import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

import { PostsProvider, Post } from '../../providers/posts/posts';
import { Category } from '../../models/category';

@Injectable()
export class FeedProvider {

  search$: BehaviorSubject<string> = new BehaviorSubject('');
  categories$: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  page$: BehaviorSubject<number> = new BehaviorSubject(1);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  noMorePage$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  perPage: number = 4;

  private cache = [];

  constructor(
    public postsProvider: PostsProvider,
  ) {}

  posts$(): Observable<Post[]> {
    return Observable
      .combineLatest(this.filters$(), this.page$)
      .do(() => this.loading$.next(true))
      .switchMap(([filter, page]) => {
        const [search, categories] = filter;
        return this.postsProvider.query({ search, categories, page, perPage: this.perPage })
          .do(posts => posts.length != this.perPage && this.noMorePage$.next(true))
          .do(() => page == 1 && (this.cache = []))
          .do(posts => this.cache[page - 1] = posts)
          .map(() => this.cache.reduce((all, posts) => [ ...all, ...posts ], []))
          .do(() => this.loading$.next(false));
      });
  }

  searchDirty$(): Observable<boolean> {
    return this.search$
      .map(search => !!search);
  }

  categoriesDirty$(): Observable<boolean> {
    return this.categories$
      .map(categories => !!categories.length);
  }

  filtersDirty$() {
    return Observable
      .combineLatest(this.searchDirty$(), this.categoriesDirty$())
      .map(filters => !!filters.filter(f => f).length);
  }

  private filters$() {
    return Observable
      .combineLatest(this.search$, this.categories$)
      .do(() => this.page$.next(1))
      .do(() => this.noMorePage$.next(false));
  }


}
