import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'gi-push',
  templateUrl: 'push.html'
})
export class PushComponent implements OnInit {

  available: boolean = true;
  subscribed: boolean = false;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public push: Push,
    public storage: Storage,
  ) {}

  ngOnInit() {
    if (!this.platform.is('cordova')) {
      this.available = false;
      return;
    }

    // First subscription
    this.storage.get('registered')
      .then(is => typeof is == 'boolean' ? is : this.storage.set('registered', true))
      .then(is => {
        if (is) this.subscribe();
        else this.unsubscribe();
      });

    // Subscribe to push notification
    this.push.rx.notification().subscribe(n => {
      const { closed, asleep } = n.app;
      const { id }: any = n.payload || {};
      id && (closed || asleep) && this.navCtrl.push('PostPage', { id });
    });
  }

  toggleSubscription() {
    if (this.subscribed) return this.storage.set('registered', false).then(() => this.unsubscribe());
    else return this.storage.set('registered', true).then(() => this.subscribe());
  }

  private subscribe() {
    return this.push.register()
      .then((t: PushToken) => this.push.saveToken(t))
      .then(() => this.subscribed = true);
  }

  private unsubscribe() {
    return this.push.unregister()
      .then(() => this.subscribed = false);
  }

}
