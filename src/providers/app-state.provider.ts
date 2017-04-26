import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';
import { Author } from '../models/author';
import { Category } from '../models/category';

import { PostsProvider } from './posts.provider';
import { CategoriesProvider } from './categories.provider';

export { Post, Author, Category };

@Injectable()
export class AppStateProvider {

  public page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public perPage: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public search: BehaviorSubject<String> = new BehaviorSubject<String>('');
  public categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  public loading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  public onPostsChange$: Subject<void> = new Subject<void>();

  private _posts: Post[] = [];

  constructor(
    public postsProvider: PostsProvider,
    public categoriesProvider: CategoriesProvider,
  ) {}

  get posts(): Observable<Post[]> {
    return Observable.combineLatest(
      this.page,
      this.perPage,
      this.search,
      this.categories,
    )
      .do(() => this.loading$.next(true))
      .do(() => this.onPostsChange$.next())
      .do(([page]) => page === 1 && (this._posts = []))
      .switchMap(([page, perPage, search, categories]) => this.postsProvider.filter(search, categories, page, perPage))
      .map(posts => this._posts = this._posts.concat(posts))
      .do(() => this.loading$.next(false));
  }

  loadMore(): void {
    const currentPage = this.page.getValue();
    return this.page.next(currentPage + 1);
  }


}
