import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carts'
})
export class CartsPipe implements PipeTransform {

  transform(value:any[]): any {
    return value.filter(item=>item.count!=0)
  }

}
