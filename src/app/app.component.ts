import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { PostsPage } from '../pages/posts/posts';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent {
  rootPage: any = PostsPage;

  constructor(
    platform: Platform,
    toastCtrl: ToastController,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    oneSignal: OneSignal
  ) {
    platform.ready().then(() => {
      // Standard native interactions
      statusBar.styleDefault();
      splashScreen.hide();

      // Check if browser is outdateed
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

      //App notification
      oneSignal.startInit('e9274f44-b837-45b3-8764-a659ef6c6b38');
      oneSignal.inFocusDisplaying(oneSignal.OSInFocusDisplayOption.Notification);
      oneSignal.setSubscription(true);
      oneSignal.handleNotificationReceived().subscribe(() => {
        // handle received here how you wish.
      });
      oneSignal.handleNotificationOpened().subscribe(() => {
        // handle opened here how you wish.
      });
      oneSignal.endInit();

    });
  }
}
