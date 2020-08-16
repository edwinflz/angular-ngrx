import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListFilms } from '@core/models/list-films.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: ListFilms;
  regex = /(\d+)/g;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getFilmId(url: string): void {
    const filmId = url.match(this.regex);
    this.router.navigate(['/films', +filmId[0]]);
  }

}
