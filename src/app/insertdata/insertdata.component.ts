import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModModule } from '../modules/mod/mod.module';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  constructor(private r:FormBuilder,private service:ApiService) { }

  ngOnInit(): void {
    this.getpro()
  }
  searchtext:string='nike'
  promod:ModModule=new ModModule()
  forms:any=this.r.group(
    {
      link:this.r.control('',Validators.required),
      name:this.r.control('',Validators.required),
      price:this.r.control('',Validators.required)

    }
  )
  postpro(data:any){
    this.promod.product_image=this.forms.value.link
    this.promod.product_name=this.forms.value.name
    this.promod.product_price=this.forms.value.price
    this.service.postpro(this.promod).subscribe(res=>{alert('data inserted successfullt');this.getpro()})
  }
  temparr:any=[]
  getpro(){
    this.service.getpro().subscribe(res=>{this.temparr=res})
  }
  delete(id:any){
    this.service.delpro(id).subscribe(res=>{alert('successfully deleted')})
  }
}
