import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoAuthorPage } from './info-author';

@NgModule({
  declarations: [
    InfoAuthorPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoAuthorPage),
  ],
  exports: [
    InfoAuthorPage
  ]
})
export class InfoAuthorPageModule {}
