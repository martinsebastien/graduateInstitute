import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { Author } from '../../models/author';

@IonicPage()
@Component({
  selector: 'page-info-author',
  templateUrl: 'info-author.html',
})
export class InfoAuthorPage {

  author: Author;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {}

  ionViewDidLoad() {
    this.author = this.navParams.get('author');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
