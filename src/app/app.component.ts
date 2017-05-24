import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent {
  rootPage:any = 'PostsPage';

  constructor(
    platform: Platform,
    toastCtrl: ToastController,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
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
    });
  }
}
