import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter(item=>item.sale!=1);
  }

}
