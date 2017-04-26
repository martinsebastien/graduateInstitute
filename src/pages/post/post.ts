import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { PostsProvider, Post, Author, Category } from '../../providers/posts.provider';
import { AppStateProvider } from '../../providers/app-state.provider';

import { InfoAuthorPage } from '../info-author/info-author';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  public post?: Post;
  public isLoading: Boolean = false;

  private postSubscription: Subscription;
  private isLoadingSubscription: Subscription;
  private onPostsChangeSubscription: Subscription;

  constructor(
    public params: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public postsProvider: PostsProvider,
    public appStateProvider: AppStateProvider,
  ) {}

  ionViewWillLoad() {
    // Get param id
    const id = this.params.get('id');
    // Load posts
    this.postSubscription = this.postsProvider
      .get(id)
      .subscribe(post => this.post = post);

    // Load isLoading
    this.isLoadingSubscription = this.appStateProvider
      .loading$
      .subscribe(isLoading => this.isLoading = isLoading);

      // Load onPostsChange
      this.onPostsChangeSubscription = this.appStateProvider
        .onPostsChange$
        .subscribe(() => this.navCtrl.popToRoot());
  }

  categories(categories: Category[]): String {
    return categories.map(category => category.name).join(', ');
  }

  ionViewWillUnload() {
    this.postSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
    this.onPostsChangeSubscription.unsubscribe();
  }

  presentAuthorInformation(author: Author): void {
    const modal = this.modalCtrl.create(InfoAuthorPage, { author });
    modal.present();
  }

}
