import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlignContainerComponent } from './align-container';

@NgModule({
  declarations: [
    AlignContainerComponent,
  ],
  imports: [
    IonicPageModule.forChild(AlignContainerComponent),
  ],
  exports: [
    AlignContainerComponent
  ]
})
export class AlignContainerComponentModule {}
