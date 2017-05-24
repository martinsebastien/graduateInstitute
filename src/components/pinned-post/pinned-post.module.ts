import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinnedPostComponent } from './pinned-post';

@NgModule({
  declarations: [
    PinnedPostComponent,
  ],
  imports: [
    IonicPageModule.forChild(PinnedPostComponent),
  ],
  exports: [
    PinnedPostComponent
  ]
})
export class PinnedPostComponentModule {}
