import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'gi-back',
  templateUrl: 'back.html',
})
export class BackComponent {

  constructor(
    public navCtrl: NavController,
  ) {}

  goBack() {
    this.navCtrl.pop();
  }

}
