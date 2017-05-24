import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider, Post } from '../../providers/posts/posts';
import { FeedProvider } from '../../providers/feed/feed';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  public posts$: Observable<Post[]>;
  public pinnedPosts$: Observable<Post[]>;
  public dirty$: Observable<boolean>;
  public feedLoading$: Observable<boolean>;
  public noMorePage$: Observable<boolean>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public postsProvider: PostsProvider,
    public feedProvider: FeedProvider,
  ) {
    this.dirty$ = this.feedProvider.filtersDirty$();
    this.feedLoading$ = this.feedProvider.loading$;
    this.posts$ = this.feedProvider.posts$();
    this.pinnedPosts$ = this.postsProvider.pinned();
    this.noMorePage$ = this.feedProvider.noMorePage$;
  }

  doInfinite(loading) {
    const nextPage = this.feedProvider.page$.value + 1;
    this.feedProvider.page$.next(nextPage);
    this.feedLoading$
      .filter(is => !is)
      .take(1)
      .subscribe(() => loading.complete());
  }

  goToPost({ id }: Post) {
    this.navCtrl.push('PostPage', { id });
  }

  trackById(index, post) {
    return post.id;
  }

}
