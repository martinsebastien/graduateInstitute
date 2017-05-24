import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { PostsProvider, Post } from '../../providers/posts/posts';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  public post$: Observable<Post>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public posts: PostsProvider,
  ) {}

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    if (!id) return;
    this.post$ = this.posts.get(id);
  }

}
