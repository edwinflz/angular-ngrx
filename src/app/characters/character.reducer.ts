import { createReducer, on } from '@ngrx/store';
import { setCharacters } from './character.actions';
import { ListCharacters } from '../core/models/list-characters.interface';

export interface State {
    characters: ListCharacters[];
}

export const initialState: State = {
    characters: [],
};

const _characterReducer = createReducer(initialState,
    on(setCharacters, (state, { characters }) => ({ ...state, characters })),
);

export function characterReducer(state, action) {
    return _characterReducer(state, action);
}
