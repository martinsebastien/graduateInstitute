import { Component, Input } from '@angular/core';

import { Post } from '../../models/post';

@Component({
  selector: 'gi-pinned-post',
  templateUrl: 'pinned-post.html'
})
export class PinnedPostComponent {

  @Input() post: Post;

}
