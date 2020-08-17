import { Pipe, PipeTransform } from '@angular/core';
import { ListFilms } from '@core/models/list-films.interface';

@Pipe({
  name: 'orderingByEpisode'
})
export class OrderingByEpisodePipe implements PipeTransform {

  transform(items: ListFilms[], value: string): unknown {
    return [...items].sort((a, b) => a.episode_id - b.episode_id);
  }

}
