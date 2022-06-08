import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupModule } from '../modules/signup/signup.module';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private r:FormBuilder,private service:SignupService,private router:Router) { }

  ngOnInit(): void {
  }
  password:string="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}"
  
  forms:any=this.r.group({
    email:this.r.control('',[Validators.required,Validators.email]),
    password:this.r.control('',[Validators.required,Validators.pattern(this.password)]),
    date:this.r.control('',Validators.required)
  })
  signmod:SignupModule=new SignupModule()
  signup(){
    this.signmod.email=this.forms.value.email
    this.signmod.password=this.forms.value.password
    this.service.postpro(this.signmod).subscribe(res=>{alert("signed up successfully");this.router.navigate(['/login'])})
  }
}
