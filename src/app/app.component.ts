import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PostsPage } from '../pages/posts/posts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PostsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    toastCtrl: ToastController,
  ) {
    platform.ready().then(() => {
      const msieCheck = window.navigator.userAgent;
      const toast = toastCtrl.create({
        message: 'You are using an outdated browser. Try downloading Chrome or Firefox.',
        duration: 10000,
        position: 'middle',
        cssClass: 'old-browser-toast',
        showCloseButton: true,
      });
      toast.onDidDismiss(() => window.open('http://outdatedbrowser.com/en', '_system'));

      msieCheck.indexOf('MSIE ') > 0 && toast.present();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

