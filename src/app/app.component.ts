import { Component } from '@angular/core';
import { ActivatedRoute, Router ,Event} from '@angular/router';
import { SignupService } from './services/signup.service';
import{NavigationEnd,NavigationStart, Event as NavigationEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoe-selling-website';
  event$ 
  show:any=false;
  constructor(private router: Router) {
    
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url);
                if(event.url=='/sale'){
                  this.show=true
                }
                else if(event.url=='/cart'){
                  this.show=true
                }
                
                else if(event.url=='/product'){
                  this.show=true
                }
                else if(event.url=='/aboutus'){
                  this.show=true
                }
                else if(event.url=='/brands'){
                  this.show=true
                }
                else if(event.url=='/brands/nike'){
                  this.show=true
                }
                else if(event.url=='/brands/reebok'){
                  this.show=true
                }
                else if(event.url=='/brands/puma'){
                  this.show=true
                }
                else if(event.url=='/brands/adidas'){
                  this.show=true
                }
                else if(event.url=='/home'){
                  this.show=true
                }
                else{
                  this.show=false
                }
              }
            });
  }

}
