import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostComponent } from './post';

import { PostInfoComponentModule } from '../post-info/post-info.module';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    IonicPageModule.forChild(PostComponent),
    PostInfoComponentModule,
  ],
  exports: [
    PostComponent
  ]
})
export class PostComponentModule {}
