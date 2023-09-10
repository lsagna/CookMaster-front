import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Product, ProductType } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/poducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  isEvent = false;
  currentProduct?: Product;
  creator?: User;
  currentImage = "assets/img/logo_mastercook.svg";
  constructor(
	private readonly router: Router,
	private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
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
			this.creator!.lastname = "company" ?? null;
			this.currentProduct.creator = this.creator!;
			
			if (this.currentProduct && this.currentProduct.type == ProductType.EVENT) {
				this.isEvent = true;
			}	
			console.log(this.currentProduct);
		},
		error: (error) => {
			console.error(error);
		}
	})
	if (this.currentProduct && this.currentProduct.type == ProductType.EVENT) {
		this.isEvent = true;
	}
	console.log(this.currentProduct);
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
