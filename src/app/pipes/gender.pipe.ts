import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any[],gender: string): any {
    return value.filter(res=>res.gender==gender);
  }

}
