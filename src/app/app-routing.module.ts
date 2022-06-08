import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { AdidasComponent } from './component/adidas/adidas.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NikeComponent } from './component/nike/nike.component';
import { PumaComponent } from './component/puma/puma.component';
import { ReebokComponent } from './component/reebok/reebok.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './pages/main/main.component';
import { SaleComponent } from './sale/sale.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'product',component:ContactusComponent,canActivate:[AuthGuard]},
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard]},
  {path:'sale',component:SaleComponent,canActivate:[AuthGuard]},
  {path:'brands',canActivate:[AuthGuard],children:[{path:'nike',component:NikeComponent},{path:'adidas',component:AdidasComponent},{path:'puma',component:PumaComponent},{path:'reebok',component:ReebokComponent}]},
  {path:'home',canActivate:[AuthGuard],component:MainComponent},
  {path:'insert',component:InsertdataComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path: '' , redirectTo:'login',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
