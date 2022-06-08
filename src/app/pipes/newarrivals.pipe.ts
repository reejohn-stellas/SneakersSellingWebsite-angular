import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newarrivals'
})
export class NewarrivalsPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter(item=>item.new_arrivals!=1)
  }

}
