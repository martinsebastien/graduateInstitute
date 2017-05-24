import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostInfoComponent } from './post-info';

@NgModule({
  declarations: [
    PostInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(PostInfoComponent),
  ],
  exports: [
    PostInfoComponent
  ]
})
export class PostInfoComponentModule {}
