import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CategoriesProvider, Category } from '../../providers/categories.provider';
import { AppStateProvider } from '../../providers/app-state.provider';

@Component({
  selector: 'gi-menu',
  templateUrl: 'menu.html',
})
export class MenuComponent implements OnInit {

  public search: string = '';

  public menuIsOpen: Boolean = false;
  public isLoading: Boolean = false;
  public categories: Category[] = [];

  public categoriesSubscription: Subscription;
  public isLoadingSubscription: Subscription;

  constructor(
    public categoriesProvider: CategoriesProvider,
    public appStateProvider: AppStateProvider,
  ) {}

  ngOnInit() {
    this.categoriesSubscription = this.categoriesProvider
      .all()
      .subscribe(categories => this.categories = categories);

    this.isLoadingSubscription = this.appStateProvider.loading$
      .subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  toggleCategory(category: Category): void {
    let categories: Category[] = this.appStateProvider.categories.getValue();
    categories = categories.indexOf(category) >= 0 ? categories.filter(c => c.id !== category.id) : [...categories, category];
    this.appStateProvider.categories.next(categories);
  }

  isAnActiveCategory(category: Category): Boolean {
    return !!this.appStateProvider.categories.getValue().filter(c => c.id === category.id).length
  }

  doSearch(): void {
    this.appStateProvider.search.next(this.search);
  }

}
