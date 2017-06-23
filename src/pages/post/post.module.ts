import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';

import { PostComponentModule } from '../../components/post/post.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { BackComponentModule } from '../../components/back/back.module';
import { CommentsComponentModule } from '../../components/comments/comments.module';
import { NewCommentComponentModule } from '../../components/new-comment/new-comment.module';

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    PostComponentModule,
    HeaderComponentModule,
    BackComponentModule,
    CommentsComponentModule,
    NewCommentComponentModule,
  ],
  exports: [
    PostPage,
  ],
})
export class PostPageModule {}
