import { HttpClient } from '@angular/common/http';
//import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
//import { stringify } from 'querystring';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  postcart(data:any){
    return this.http.post<any>("http://localhost:3000/cart",data).pipe(map(res=>{return res}))
  }
  getcart(){
    return this.http.get<any>("http://localhost:3000/cart").pipe(map(res=>{return res}))
  }
  delcart(id:any){
        return this.http.delete<any>("http://localhost:3000/cart/"+id).pipe(map(res=>{return res}))
  }
}
