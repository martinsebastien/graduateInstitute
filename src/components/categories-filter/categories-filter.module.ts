import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesFilterComponent } from './categories-filter';

@NgModule({
  declarations: [
    CategoriesFilterComponent,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesFilterComponent),
  ],
  exports: [
    CategoriesFilterComponent
  ]
})
export class CategoriesFilterComponentModule {}
