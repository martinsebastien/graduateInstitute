import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { PostsProvider, Post, Author, Category } from '../../providers/posts.provider';

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
    public postsProvider: PostsProvider,
  ) {}

  ionViewWillLoad() {
    // Load posts
    this.postsSubscription = this.postsProvider
      .all()
      .subscribe(posts => this.posts = posts);
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
    console.log('infinite scroll');
    setTimeout(() => {
      infiniteScroll.complete();
    },3000);
  }

}
