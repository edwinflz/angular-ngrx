import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListFilms } from '@core/models/list-films.interface';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Subscription } from 'rxjs';
import { loadingFilms } from '../../film.actions';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit, OnDestroy {

  films: ListFilms[] = [];
  filmSub: Subscription;
  isLoading = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.selectStoreFilm();
    this.store.dispatch(loadingFilms());
  }

  ngOnDestroy(): void {
    this.filmSub.unsubscribe();
  }

  selectStoreFilm(): void {
    this.filmSub = this.store.select('filmState').subscribe(({ films, loading, error }) => {
      this.films = films;
      this.isLoading = loading;
      this.error = error;
    });
  }



}
