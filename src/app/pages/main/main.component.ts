import { Component, OnInit } from '@angular/core';
import { ModModule } from 'src/app/modules/mod/mod.module';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.getpro()
  }
  imgarr=["../assets/images/carousel-1.png","../assets/images/carousel-2.png","../assets/images/carousel-3.png"]
  temparr:any=[]
  getpro(){
    this.service.getpro().subscribe(res=>{this.temparr=res})
  }
  counts:any=0;
  count(id:any,count:any,type:string){
    type==='add'?count++:count--
    this.counts=count
    this.service.patchpro(id,{count:count}).subscribe((res)=>{this.getpro()})
  }
  items:ModModule=new ModModule()
  postcart(data:any[]){
    // console.log(data)
    this.items.product_image=data[0]
    this.items.product_name=data[1]
    this.items.product_price=data[2]
    this.items.count=this.counts
    this.service.patchpro(data[3],{count:1}).subscribe((res)=>{this.getpro()})
    this.cart.postcart(this.items).subscribe(res=>{this.getpro()})
  }

}
