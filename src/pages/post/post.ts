import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { PostsProvider, Post } from '../../providers/posts/posts';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  public id$: BehaviorSubject<string> = new BehaviorSubject(null);
  public refresh$: BehaviorSubject<void> = new BehaviorSubject(null);
  public post$: Observable<Post> = Observable.combineLatest(this.id$, this.refresh$)
    .map(([id]) => id)
    .filter(id => !!id)
    .switchMap(id => this.posts.get(id))
    .share();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public posts: PostsProvider,
  ) {
    const id = this.navParams.get('id');
    id && this.id$.next(id);
  }

  postRefresh(refresher) {
    this.post$
      .take(1)
      .finally(() => refresher.complete())
      .subscribe();

    this.refresh$.next(null);
  }

}
