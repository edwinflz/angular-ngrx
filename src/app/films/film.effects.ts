import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FilmsService } from '../core/services/films/films.service';
import * as filmsAction from './film.actions';

@Injectable()
export class FilmEffects {


    constructor(
        private actions$: Actions,
        private filmsService: FilmsService
    ) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(filmsAction.loadingFilms),
        mergeMap(() => this.filmsService.getAllFilms()
            .pipe(
                map(movies => filmsAction.loadingFilmSuccess({ films: movies })),
                catchError((err) => of(filmsAction.loadingFilmError({ payload: err })))
            ))
    )
    );

}
