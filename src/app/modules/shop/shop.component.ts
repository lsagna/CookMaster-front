import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/poducts.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  allProducts: Product[] = [];
  constructor(
	private readonly productsService: ProductsService,
	private readonly router: Router
  ) { }

  ngOnInit(): void {
	this.productsService.getAllProducts().subscribe({
		next: (products: Product[]) => {
			this.allProducts = products;
			console.log(this.allProducts)
		},
		error: (error) => {
			console.error(error);
		}
	});
  }

  onProductClick(item: Product) {
	const route = `/shop/${item.id}`;
	this.router.navigate([route], { state: { id: item.id }})
  }

}
