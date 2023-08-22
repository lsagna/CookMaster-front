import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ShopComponent } from './modules/shop/shop.component';
import { ProductComponent } from './modules/product/product.component';
import { CartComponent } from './modules/cart/cart.component';

const routes: Routes = [
	{
		path: 'auth',
		component: AuthenticationComponent,
	},
	{
		path: 'shop',
		component: ShopComponent,
	},
	{
		path: 'shop/:productId',
		component: ProductComponent,
	},
	{
		path: 'cart',
		component: CartComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
