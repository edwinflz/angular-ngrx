import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment.prod';
import { ListCharacters } from '@core/models/list-characters.interface';
import { Film } from '@core/models/film.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = `${environment.url_api}/people`;

  constructor(private http: HttpClient) { }

  getAllCharacters(page: number): Observable<any> {
    return this.http.get(`${this.url}/?page=${page}`);
  }

  getFilmsByCharacter(url: string): Observable<Film> {
    return this.http.get(url).pipe(
      map((response: any) => response as Film)
    );
  }

}
