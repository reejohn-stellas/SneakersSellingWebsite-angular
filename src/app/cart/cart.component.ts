import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:ApiService) { }

  ngOnInit(): void {
    this.getcart();
      
  }
  temparr:any=[]
 
  getcart(){
    this.cart.getpro().subscribe(res=>{this.temparr=res})
    
  }
 delcart(id:any){
  this.cart.patchpro(id,{count:0}).subscribe(res=>{this.getcart()})
 }
 len:any;

}
