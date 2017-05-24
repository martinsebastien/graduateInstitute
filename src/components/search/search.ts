import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedProvider } from '../../providers/feed/feed';

@Component({
  selector: 'gi-search',
  templateUrl: 'search.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('search') search;
  dirty$: Observable<boolean>;
  loading$: Observable<boolean>;


  constructor(
    public feedProvider: FeedProvider,
  ) {}

  ngOnInit() {
    this.dirty$ = this.feedProvider.searchDirty$();
    this.loading$ = this.feedProvider.loading$;
  }

  doSearch(e) {
    e.preventDefault();
    const { value } = this.search;
    this.feedProvider.search$.next(value);
  }

  undoSearch(e) {
    e.preventDefault();
    this.search.value = '';
    this.feedProvider.search$.next('');
  }

}
