import { ActionReducerMap } from '@ngrx/store';
import * as filmState from './films/film.reducer';
import * as characterState from './characters/character.reducer';


export interface AppState {
    filmState: filmState.State;
    characterState: characterState.State;
}


export const appReducers: ActionReducerMap<AppState> = {
    filmState: filmState.filmsReducer,
    characterState: characterState.characterReducer
}