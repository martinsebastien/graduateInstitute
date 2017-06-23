import { Component, Input } from '@angular/core';

import { Comment } from '../../models/comment';

@Component({
  selector: 'gi-comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  @Input() comments: Comment[];

}
