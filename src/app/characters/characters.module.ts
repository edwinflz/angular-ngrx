import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { CharacterComponent } from './components/character/character.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListCharactersComponent, CharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class CharactersModule { }
