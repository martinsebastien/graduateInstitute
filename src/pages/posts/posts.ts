import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs';

import { AppStateProvider, Post, Author, Category } from '../../providers/app-state.provider';
import { PostsProvider } from '../../providers/posts.provider';
import moment from 'moment';

import { PostPage } from '../post/post';
import { InfoAuthorPage } from '../info-author/info-author';


@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  public posts: Post[] = [];
  public pinnedPosts: Post[] = [];
  public isLoading: Boolean = false;

  private postsSubscription: Subscription;
  private pinnedPostsSubscription: Subscription;
  private isLoadingSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public appStateProvider: AppStateProvider,
    public postsProvider: PostsProvider,
  ) {}

  ionViewWillLoad() {
    // Load posts
    console.log(moment().format('LL'));
    this.postsSubscription = this.appStateProvider.posts.subscribe(posts => this.posts = posts);
    this.pinnedPostsSubscription = this.postsProvider.pinned().subscribe((posts) => this.pinnedPosts = posts);
    this.isLoadingSubscription = this.appStateProvider.loading$.subscribe(isLoading => this.isLoading = isLoading);
  }

  ionViewWillUnload() {
    this.postsSubscription.unsubscribe();
    this.pinnedPostsSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
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
    this.appStateProvider.loadMore();
  }

  convertDate({ date }: Post): string{
    return moment(date).format('LL');
  }

}
