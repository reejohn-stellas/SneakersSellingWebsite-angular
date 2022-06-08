import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  login:any=false
  postpro(data:any){
    
    return this.http.post<any>("http://localhost:3000/signup",data).pipe(map(res=>{return res}))
  }
  getpro(){
    
    return this.http.get<any>("http://localhost:3000/signup").pipe(map(res=>{return res}))
  }
}
