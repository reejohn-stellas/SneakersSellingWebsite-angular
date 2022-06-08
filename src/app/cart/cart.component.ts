import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.getcart();
      
  }
  temparr:any=[]
 
  getcart(){
    this.cart.getcart().subscribe(res=>{this.temparr=res})
    
  }
 delcart(id:any){
  this.cart.delcart(id).subscribe(res=>{this.getcart()})
 }
 len:any;

}
