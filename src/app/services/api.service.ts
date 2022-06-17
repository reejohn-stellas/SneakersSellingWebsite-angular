import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ModModule} from '../modules/mod/mod.module';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // promod:ModModule=new ModModule()
  // temparr:any[]=[{product_image:"https://superkicks.in/wp-content/uploads/2022/05/1-2-850x816.jpg",product_name:"Nike Dunk Low",product_price:10000},{product_image:"https://superkicks.in/wp-content/uploads/2022/05/1-49-850x816.jpg",product_name:"Nike Kyrie Infinity",product_price:20000},{product_image:"https://superkicks.in/wp-content/uploads/2022/04/1-2-37-850x816.jpg",product_name:"Nike Giannis Immortality",product_price:30000},]
  constructor(private http:HttpClient) { }
  
  postpro(data:any){
    
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map(res=>{return res}))
  }
  getpro(){
    
    return this.http.get<any>("http://localhost:3000/posts").pipe(map(res=>{return res}))
  }
  delpro(id:any){
    return this.http.delete<any>("http://localhost:3000/posts"+id).pipe(map(res=>{return res}))
  }
  patchpro(id:any,count:any){
    return this.http.patch<any>("http://localhost:3000/posts/"+id,count).pipe(map(res=>{return res}))
  }
  
}
