import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment.prod';
import { ListCharacters } from '@core/models/list-characters.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = `${environment.url_api}/films`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<ListCharacters[]> {
    return this.http.get(`${this.url}`)
      .pipe(
        map((response: any) => response.results as ListCharacters[])
      );
  }

}
