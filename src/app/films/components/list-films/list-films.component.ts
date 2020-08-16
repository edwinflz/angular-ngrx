import { Component, OnInit } from '@angular/core';
import { FilmsService } from '@core/services/films/films.service';
import { ListFilms } from '@core/models/list-films.interface';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

  films: ListFilms[] = [];
  isLoading = false;

  constructor(
    private filmService: FilmsService,
  ) { }

  ngOnInit(): void {
    this.fetchFilms();
  }

  fetchFilms(): void {
    this.isLoading = true;
    this.filmService.getAllFilms()
      .subscribe(films => {
        this.films = this.orderingByEpisode(films);
        this.isLoading = false;
      });
  }

  orderingByEpisode(films: ListFilms[]): ListFilms[] {
    return films.sort((a, b) => a.episode_id - b.episode_id);
  }


}
