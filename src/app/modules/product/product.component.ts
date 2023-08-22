import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/poducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  currentProduct = {} as Product;
  creator = {} as User;
  currentImage = "assets/img/logo_mastercook.svg";
  constructor(
	private readonly router: Router,
	private readonly productsService: ProductsService
  ) { 
	const nav: Navigation = this.router.getCurrentNavigation()!;
	if (nav.extras && nav.extras.state && nav.extras.state['id']) {
		this.productsService.getProduct(nav.extras.state['id']).subscribe({
			next: (result: Product) => {
				this.currentProduct = result;
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/user.png');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentImage = this.currentProduct.images[1];

			},
			error: (error) => {
				console.error(error);
			}
		})
	}
	else {
		const url = this.router.url;
		const id = Number(url.substring(url.length - 1));
		this.productsService.getProduct(id).subscribe({
			next: (result: Product) => {
				this.currentProduct = result;
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/user.png');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.currentProduct.images.push('assets/img/logo_mastercook.svg');
				this.creator.lastname = "company";
				this.currentProduct.creator = this.creator;
				
			},
			error: (error) => {
				console.error(error);
			}
		})
	}
  }

  ngOnInit(): void {
  }

  updateImage(url: string) {
	this.currentImage = url;
  }

  addToCart(id: number) {
	let cart = JSON.parse(localStorage.getItem('cart') ?? JSON.stringify([]));
	cart.push(id);
	console.log(cart);
	localStorage.setItem('cart', JSON.stringify(cart));
  }
}
