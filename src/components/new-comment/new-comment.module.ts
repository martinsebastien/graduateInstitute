import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCommentComponent } from './new-comment';

@NgModule({
  declarations: [
    NewCommentComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewCommentComponent),
  ],
  exports: [
    NewCommentComponent,
  ],
})
export class NewCommentComponentModule {}
