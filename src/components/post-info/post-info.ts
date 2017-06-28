import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Post } from '../../models/post';
import { Author } from '../../models/author';

import { InfoAuthorPage } from '../../pages/info-author/info-author';

@Component({
  selector: 'gi-post-info',
  templateUrl: 'post-info.html'
})
export class PostInfoComponent {

  @Input() post: Post;

  constructor(
    public modalCtrl: ModalController,
  ) {}

  showInfoAuthor(e, author: Author) {
    e.stopPropagation();
    const modal = this.modalCtrl.create(InfoAuthorPage, { author });
    modal.present();
  }

}
