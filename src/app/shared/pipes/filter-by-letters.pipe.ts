import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLetters'
})
export class FilterByLettersPipe implements PipeTransform {

  transform(items: any[], value: string): unknown {
    if (items.length === 0 || !items) {
      return items;
    }

    let itemsTemp = items.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0);

    if (itemsTemp.length === 0) {
      itemsTemp = items.filter(item => item.eye_color.toLowerCase().indexOf(value.toLowerCase()) >= 0);
    }

    return itemsTemp;
  }

}
