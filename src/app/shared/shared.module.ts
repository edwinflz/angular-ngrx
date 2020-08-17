import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterByLettersPipe } from './pipes/filter-by-letters.pipe';
import { FormsModule } from "@angular/forms";
import { OrderingByEpisodePipe } from './pipes/ordering-by-episode.pipe'

@NgModule({
  declarations: [FilterByLettersPipe, OrderingByEpisodePipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    FilterByLettersPipe,
    OrderingByEpisodePipe
  ]
})
export class SharedModule { }
