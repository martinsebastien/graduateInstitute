import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { WpHttpService } from '../services/wp-http/wp-http';
import { PostsProvider } from '../providers/posts/posts';
import { CategoriesProvider } from '../providers/categories/categories';
import { CommentsProvider } from '../providers/comments/comments';
import { FeedProvider } from '../providers/feed/feed';

import { PostsPage } from '../pages/posts/posts';
import { PostPage } from '../pages/post/post';
import { InfoAuthorPage } from '../pages/info-author/info-author';

import { AlignContainerComponent } from '../components/align-container/align-container';
import { BackComponent } from '../components/back/back'
import { CategoriesFilterComponent } from '../components/categories-filter/categories-filter'
import { CommentsComponent } from '../components/comments/comments'
import { HeaderComponent } from '../components/header/header'
import { MenuComponent } from '../components/menu/menu'
import { NewCommentComponent } from '../components/new-comment/new-comment'
import { PinnedPostComponent } from '../components/pinned-post/pinned-post'
import { PostComponent } from '../components/post/post'
import { PostInfoComponent } from '../components/post-info/post-info'
import { PushComponent } from '../components/push/push'
import { SearchComponent } from '../components/search/search'
import { VideoComponent } from '../components/video/video'

const cloudSettings: CloudSettings = {
  core: {
    app_id: '769f8f2e',
  },
  push: {
    sender_id: '611426639173',
    pluginConfig: {
      ios: {
        badge: true,
        sound: true,
      },
      android: {
        iconColor: '#E00F26',
      },
    },
  },
};

@NgModule({
  declarations: [
    AppComponent,
    PostsPage,
    PostPage,
    InfoAuthorPage,
    AlignContainerComponent,
    BackComponent,
    CategoriesFilterComponent,
    CommentsComponent,
    HeaderComponent,
    MenuComponent,
    NewCommentComponent,
    PinnedPostComponent,
    PostComponent,
    PostInfoComponent,
    PushComponent,
    SearchComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    PostsPage,
    PostPage,
    InfoAuthorPage,
    AlignContainerComponent,
    BackComponent,
    CategoriesFilterComponent,
    CommentsComponent,
    HeaderComponent,
    MenuComponent,
    NewCommentComponent,
    PinnedPostComponent,
    PostComponent,
    PostInfoComponent,
    PushComponent,
    SearchComponent,
    VideoComponent,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    StatusBar,
    SplashScreen,
    WpHttpService,
    PostsProvider,
    CategoriesProvider,
    CommentsProvider,
    FeedProvider,
  ],
})
export class AppModule {}
