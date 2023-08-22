import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/poducts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cart = [];
  total = 0;
  cartItems = [] as CartItem[];
  isCartEmpty = true;
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
	this.cart = JSON.parse(localStorage.getItem('cart') ?? JSON.stringify([]));
	if (this.cart.length == 0) {
		this.isCartEmpty = true;
	}
	else {
		console.log(this.cart)
		this.isCartEmpty = false;
		for (let ids in this.cart) {
			let newItem = {} as CartItem;
			this.productsService.getProduct(Number(this.cart[ids])).subscribe({
				next: (value: Product) => {
					let trigger = false;
					let idx = 0;
					for (let cartI in this.cartItems) {
						if (this.cartItems[Number(cartI)].item.id == value.id) {
							trigger = true;
							idx = Number(cartI);
						}
						console.log(trigger)
					}
					if (trigger) {
						this.cartItems[idx].quantity += 1;
					}
					else {
						newItem.item = value;
						newItem.quantity = 1;
						console.log(newItem)
						this.cartItems.push(newItem);
					}
					this.total += value.price;
				},
			});
		}
		console.log(this.cartItems.length)
	}
  }

  deleteItem(id: number) {
	let done = false;
	this.cartItems.forEach((item, idx) => {
		if (item.item.id == id) this.cartItems.splice(idx, 1);
	});
	while(!done) {
		let found = false;
		this.cart.forEach((item, idx) => {
			if (Number(item) == id) {
				this.cart.splice(idx, 1);
				found = true;
			}
		});
		if (!found) done = true;
	}
	localStorage.setItem('cart', JSON.stringify(this.cart));
	console.log(this.cartItems);
  }

}
