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
