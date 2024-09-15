import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { HistoryComponent } from './components/history/history.component';
import { OrdersComponent } from './modules/admin/components/orders/orders.component';

import { UpdateProductComponent } from './modules/admin/components/update-product/update-product.component';

import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    HomeComponent,
    LoginComponent,
    LandingPageComponent,
    LoaderSpinnerComponent,
    NotFoundComponent,
    PlaceOrderComponent,
    ProductDetailsComponent,
    MyOrdersComponent,
    MyCartComponent,
   
    OrdersComponent,
    HistoryComponent,
    
    UpdateProductComponent,
    
    
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
