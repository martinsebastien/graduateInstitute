import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderComponent } from './header';
import { AlignContainerComponentModule } from '../align-container/align-container.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(HeaderComponent),
    AlignContainerComponentModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderComponentModule { }
