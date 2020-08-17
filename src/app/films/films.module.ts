import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { DetailFilmsComponent } from './components/detail-films/detail-films.component';
import { FilmComponent } from './components/film/film.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListFilmsComponent, DetailFilmsComponent, FilmComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ]
})
export class FilmsModule { }
