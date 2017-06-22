import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';

import { HeaderComponentModule } from '../../components/header/header.module';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { PinnedPostComponentModule } from '../../components/pinned-post/pinned-post.module';
import { PostComponentModule } from '../../components/post/post.module';
import { AlignContainerComponentModule } from '../../components/align-container/align-container.module';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
    HeaderComponentModule,
    MenuComponentModule,
    PinnedPostComponentModule,
    PostComponentModule,
    AlignContainerComponentModule,
  ],
  exports: [
    PostsPage
  ]
})
export class PostsPageModule {}
