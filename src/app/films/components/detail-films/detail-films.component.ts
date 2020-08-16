import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { FilmsService } from '@core/services/films/films.service';
import { ListFilms } from '@core/models/list-films.interface';
import { ListCharacters } from '@core/models/list-characters.interface';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-detail-films',
  templateUrl: './detail-films.component.html',
  styleUrls: ['./detail-films.component.scss']
})
export class DetailFilmsComponent implements OnInit {

  film$: Observable<ListFilms>;
  characters: ListCharacters[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
  ) { }

  ngOnInit(): void {
    this.tryParameterId();
  }

  tryParameterId(): void {
    this.film$ = this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          return this.filmService.getFilmById(params.id);
        })
      );

    this.fetchCharacter();

  }

  fetchCharacter(): void {
    this.film$.subscribe(film => {
      const characters = film.characters;
      forkJoin(
        characters.map(
          url => this.filmService.getCharactersByFilm(url)
        )
      ).subscribe(data => {
        this.characters = data;
      });
    });
  }

}
