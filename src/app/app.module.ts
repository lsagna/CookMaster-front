import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopModule } from './modules/shop/shop.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './modules/shared/shared.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	AuthenticationModule,
	AccountModule,
	ShopModule,
	ProductModule,
	CartModule,
	HttpClientModule,
	SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
