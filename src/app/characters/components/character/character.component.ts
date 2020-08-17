import { Component, OnInit, Input } from '@angular/core';
import { ListCharacters } from '@core/models/list-characters.interface';
import { CharactersService } from '@core/services/characters/characters.service';
import { Film } from '@core/models/film.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: ListCharacters;
  nameFilms: Film[] = [];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
  }

  fetchFilmsByCharacter(films: string[]): void {
    forkJoin(
      films.map(
        url => this.charactersService.getFilmsByCharacter(url)
      )
    ).subscribe((data: Film[]) => {
      this.nameFilms = data;
    });
  }

}
