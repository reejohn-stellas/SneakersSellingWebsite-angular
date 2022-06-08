import { Component, OnInit } from '@angular/core';
import { ModModule } from 'src/app/modules/mod/mod.module';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {

  constructor(private service:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.getpro()
  }
  temparr:any=[]
  getpro(){
    this.service.getpro().subscribe((res)=>{this.temparr=res})
  }
  items:ModModule=new ModModule()
  postcart(data:any[]){
    // console.log(data)
    this.items.product_image=data[0]
    this.items.product_name=data[1]
    this.items.product_price=data[2]
    this.cart.postcart(this.items).subscribe(res=>{alert("Added TO cart")})
  }

}
