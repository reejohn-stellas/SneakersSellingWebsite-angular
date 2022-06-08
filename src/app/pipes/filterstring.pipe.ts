import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterstring'
})
export class FilterstringPipe implements PipeTransform {

  transform(value: any,str:string): any {
    const users:any=[]
    
    for(const user of value){
      if(((user['product_name']).toLowerCase()).includes(str.toLowerCase())){
        users.push(user)
      }
    }
    return users
  }

}
