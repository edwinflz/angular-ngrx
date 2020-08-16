import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../../../environments/environment.prod';
import { ListFilms } from '@core/models/list-films.interface';
import { ListCharacters } from '@core/models/list-characters.interface';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = `${environment.url_api}/films`;

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<ListFilms[]> {
    return this.http.get(`${this.url}`)
      .pipe(
        map((response: any) => response.results as ListFilms[])
      );
  }

  getFilmById(id: number): Observable<ListFilms> {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        map((response: any) => response as ListFilms)
      );
  }

  getCharactersByFilm(url: string): Observable<ListCharacters> {
    return this.http.get(url).pipe(
      map((response: any) => response as ListCharacters)
    );
  }
}
