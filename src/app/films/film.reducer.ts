import { createReducer, on } from '@ngrx/store';
import { loadingFilms, loadingFilmSuccess, loadingFilmError } from './film.actions';
import { ListFilms } from '../core/models/list-films.interface';

export interface State {
    films: ListFilms[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: State = {
    films: [],
    loaded: false,
    loading: false,
    error: null
};

const _filmsReducer = createReducer(initialState,

    on(loadingFilms, state => ({ ...state, loading: true })),
    on(loadingFilmSuccess, (state, { films }) => ({
        ...state,
        loading: false,
        loaded: true,
        films: [...films]
    })),
    on(loadingFilmError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function filmsReducer(state, action) {
    return _filmsReducer(state, action);
}
