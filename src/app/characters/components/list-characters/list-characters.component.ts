import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListCharacters } from '@core/models/list-characters.interface';
import { CharactersService } from '@core/services/characters/characters.service';
import { map, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';;
import * as characterActions from '../../character.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {

  characters: ListCharacters[] = [];
  isLoading: boolean;
  total: number;
  p: number = 1;
  characterSub: Subscription;
  search = '';

  constructor(
    private charactersService: CharactersService,
    private store: Store<AppState>
  ) { }

  ngOnDestroy(): void {
    this.characterSub.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchCharacters(1);
    this.selectStoreCharacter();
  }

  fetchCharacters(page: number): void {
    this.isLoading = true;
    this.charactersService.getAllCharacters(page).pipe(
      tap((data) => {
        this.total = data.count;
        this.p = page;
      }),
      map((response: any) => response.results as ListCharacters[])
    )
      .subscribe(characters => {
        this.store.dispatch(characterActions.setCharacters({ characters }));
        this.isLoading = false;
      });

  }

  selectStoreCharacter(): void {
    this.characterSub = this.store.select('characterState').subscribe(({ characters }) => this.characters = characters);
  }

}
