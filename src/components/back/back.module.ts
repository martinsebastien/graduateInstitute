import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackComponent } from './back';

@NgModule({
  declarations: [
    BackComponent,
  ],
  imports: [
    IonicPageModule.forChild(BackComponent),
  ],
  exports: [
    BackComponent
  ]
})
export class BackComponentModule {}
