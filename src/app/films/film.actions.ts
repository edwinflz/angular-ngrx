import { createAction, props } from '@ngrx/store';
import { ListFilms } from '../core/models/list-films.interface';

export const loadingFilms = createAction('[Films] Load Films');

export const loadingFilmSuccess = createAction(
    '[Films] Load Films Success',
    props<{ films: ListFilms[] }>()
);

export const loadingFilmError = createAction(
    '[Films] Load Films Error',
    props<{ payload: any }>()
);
