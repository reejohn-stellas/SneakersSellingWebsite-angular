import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private service:SignupService) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['login'])
    this.service.login=false
  }
}
