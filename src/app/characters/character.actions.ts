import { createAction, props } from '@ngrx/store';
import { ListCharacters } from '../core/models/list-characters.interface';

export const setCharacters = createAction(
    '[Characters] list Characters',
    props<{ characters: ListCharacters[] }>()
);