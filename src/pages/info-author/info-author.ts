import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Author } from '../../models/author';

@Component({
  selector: 'page-info-author',
  templateUrl: 'info-author.html'
})
export class InfoAuthorPage {

  public author: Author;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewWillLoad() {
    this.author = this.params.get('author');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
