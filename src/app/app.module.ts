import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { SaleComponent } from './sale/sale.component';
import { NikeComponent } from './component/nike/nike.component';
import { ReebokComponent } from './component/reebok/reebok.component';
import { PumaComponent } from './component/puma/puma.component';
import { AdidasComponent } from './component/adidas/adidas.component';
import { MainComponent } from './pages/main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{HttpClientModule} from '@angular/common/http';
import { InsertdataComponent } from './insertdata/insertdata.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewarrivalsPipe } from './pipes/newarrivals.pipe';
import { SalePipe } from './pipes/sale.pipe';
import { PercentPipe } from './pipes/percent.pipe';
import { FilterstringPipe } from './pipes/filterstring.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    SaleComponent,
    NikeComponent,
    ReebokComponent,
    PumaComponent,
    AdidasComponent,
    MainComponent,
    PagenotfoundComponent,
    InsertdataComponent,
    NewarrivalsPipe,
    SalePipe,
    PercentPipe,
    FilterstringPipe,
    GenderPipe,
    SearchFilterPipe,
    SearchfilterPipe,
    LoginComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
