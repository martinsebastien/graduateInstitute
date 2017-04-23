import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { PostsProvider, Post, Author } from '../../providers/posts.provider';

import { InfoAuthorPage } from '../info-author/info-author';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  public post?: Post;

  private postSubscription: Subscription;

  constructor(
    public params: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public postsProvider: PostsProvider,
  ) {}

  ionViewWillLoad() {
    // Get param id
    const id = this.params.get('id');
    // Load posts
    this.postSubscription = this.postsProvider
      .get(id)
      .subscribe(post => this.post = post);

  }

  ionViewWillUnload() {
    this.postSubscription.unsubscribe();
  }

  presentAuthorInformation(author: Author): void {
    const modal = this.modalCtrl.create(InfoAuthorPage, { author });
    modal.present();
  }

}
