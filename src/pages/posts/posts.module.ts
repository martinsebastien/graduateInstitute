import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';

@NgModule({
  declarations: [],
  imports: [
    IonicPageModule.forChild(PostsPage),
  ],
  exports: []
})
export class PostsPageModule {}
