import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesProvider, Category } from '../../providers/categories/categories';
import { FeedProvider } from '../../providers/feed/feed';

@Component({
  selector: 'gi-categories-filter',
  templateUrl: 'categories-filter.html'
})
export class CategoriesFilterComponent implements OnInit {

  categories$: Observable<Category[]>;
  menuOpen: boolean = false;

  constructor(
    public categoriesProvider: CategoriesProvider,
    public feedProvider: FeedProvider,
  ) {}

  ngOnInit() {
    this.categories$ = this.categoriesProvider.all();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isAnActiveCategory(category: Category) {
    return !!this.feedProvider.categories$.value.filter(c => c.id === category.id).length;
  }

  toggleCategory(category: Category) {
    let categories: Category[] = this.feedProvider.categories$.value;
    if (categories.indexOf(category) >= 0) {
      categories = categories.filter(c => c.id !== category.id);
    } else {
      categories = [ ...categories, category ];
    }
    this.feedProvider.categories$.next(categories);
  }

}
