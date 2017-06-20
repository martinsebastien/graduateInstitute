import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostComponent } from './post';

import { PostInfoComponentModule } from '../post-info/post-info.module';
import { VideoComponentModule } from '../video/video.module';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    IonicPageModule.forChild(PostComponent),
    PostInfoComponentModule,
    VideoComponentModule,
  ],
  exports: [
    PostComponent,
  ],
})
export class PostComponentModule {}
