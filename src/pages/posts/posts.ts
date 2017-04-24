import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { AppStateProvider, Post, Author, Category } from '../../providers/app-state.provider';

import { PostPage } from '../post/post';
import { InfoAuthorPage } from '../info-author/info-author';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  public posts: Post[] = [];

  private postsSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public appStateProvider: AppStateProvider,
  ) {}

  ionViewWillLoad() {
    // Load posts
    this.postsSubscription = this.appStateProvider.posts.subscribe(posts => this.posts = posts);
  }

  ionViewWillUnload() {
    this.postsSubscription.unsubscribe();
  }

  categories(categories: Category[]): String {
    return categories.map(category => category.name).join(', ');
  }

  presentAuthorInformation(author: Author): void {
    let modal = this.modalCtrl.create(InfoAuthorPage, { author });
    modal.present();
  }

  showPost({ id }: Post): void {
    this.navCtrl.push(PostPage, { id });
  }

  doInfinite(infiniteScroll) {
    infiniteScroll.complete();
  }

}
