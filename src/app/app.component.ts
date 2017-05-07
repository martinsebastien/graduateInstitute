import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PostsPage } from '../pages/posts/posts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PostsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      let msieCheck = window.navigator.userAgent;
      let msie = msieCheck.indexOf("MSIE ");

      msie > 0 && alert("You are using an outdated browser. Try downloading Chrome or Firefox.")
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

