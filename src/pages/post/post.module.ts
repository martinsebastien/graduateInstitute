import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';

import { PostComponentModule } from '../../components/post/post.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { BackComponentModule } from '../../components/back/back.module';

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    PostComponentModule,
    HeaderComponentModule,
    BackComponentModule,
  ],
  exports: [
    PostPage,
  ],
})
export class PostPageModule {}
