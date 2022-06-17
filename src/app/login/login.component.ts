import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r:FormBuilder,private service:SignupService,private router:Router) { }

  ngOnInit(): void {
  }
  password:string="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}"
  forms:any=this.r.group({
    email:this.r.control('',[Validators.required,Validators.email]),
    password:this.r.control('',[Validators.required,Validators.pattern(this.password)])
  })
  alert=false
  login(){
    this.service.getpro().subscribe(res=>{
      const user=res.find((x:any)=>{
        return x.email===this.forms.value.email && x.password === this.forms.value.password
      })
      if(user){
        this.router.navigate(['/home'])
        this.service.login=true
      }
      else{
        this.router.navigate(['/login'])
        this.alert=true        
      }
    })
  }
}
