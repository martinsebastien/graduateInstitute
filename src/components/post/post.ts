import { Component, Input } from '@angular/core';

import { Post } from '../../models/post';

@Component({
  selector: 'gi-post',
  templateUrl: 'post.html'
})
export class PostComponent {

  @Input() post: Post;
  @Input() full: boolean = false;

}
