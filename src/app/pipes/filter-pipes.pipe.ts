import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipes',
})
export class FilterPipesPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const calculations = [];

    for (const calculation of value) {
      if ((calculation['calculationName'].toLowerCase()).includes(filterString.toLowerCase())) {
        calculations.push(calculation);
      }
    }

    return calculations;
  }
}
