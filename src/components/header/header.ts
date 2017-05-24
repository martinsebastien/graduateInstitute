import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'gi-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(
    public navCtrl: NavController,
  ) {}

  goToHome() {
    this.navCtrl.popToRoot();
  }

}
