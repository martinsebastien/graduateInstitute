import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpService } from '../services/http.service';
import { PostsProvider } from '../providers/posts.provider';
import { CategoriesProvider } from '../providers/categories.provider';
import { AppStateProvider } from '../providers/app-state.provider';

import { MyApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { PostPage } from '../pages/post/post';
import { InfoAuthorPage } from '../pages/info-author/info-author';

import { HeaderComponent } from '../components/header/header';
import { MenuComponent } from '../components/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    PostsPage,
    PostPage,
    InfoAuthorPage,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostsPage,
    PostPage,
    InfoAuthorPage,
    HeaderComponent,
    MenuComponent,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
    StatusBar,
    SplashScreen,
    HttpService,
    PostsProvider,
    CategoriesProvider,
    AppStateProvider,
  ]
})
export class AppModule {}
