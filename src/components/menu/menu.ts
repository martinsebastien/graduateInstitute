import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CategoriesProvider, Category } from '../../providers/categories.provider';

@Component({
  selector: 'gi-menu',
  templateUrl: 'menu.html',
})
export class MenuComponent implements OnInit {

  public menuIsOpen: Boolean = false;
  public categories: Category[] = [];
  public categoriesSubscription: Subscription;

  constructor(
    public categoriesProvider: CategoriesProvider,
  ) {}

  ngOnInit() {
    this.categoriesSubscription = this.categoriesProvider
      .all()
      .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

}
