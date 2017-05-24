import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponent } from './menu';

import { SearchComponentModule } from '../search/search.module';
import { CategoriesFilterComponentModule } from '../categories-filter/categories-filter.module';
import { PushComponentModule } from '../push/push.module';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(MenuComponent),
    SearchComponentModule,
    CategoriesFilterComponentModule,
    PushComponentModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuComponentModule {}
