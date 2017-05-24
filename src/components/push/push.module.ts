import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushComponent } from './push';

@NgModule({
  declarations: [
    PushComponent,
  ],
  imports: [
    IonicPageModule.forChild(PushComponent),
  ],
  exports: [
    PushComponent
  ]
})
export class PushComponentModule {}
