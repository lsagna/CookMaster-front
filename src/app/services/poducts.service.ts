import { Injectable } from '@angular/core';
import { ProductsController } from '../controllers/products.controller';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsController: ProductsController) { }

  public getAllProducts(): Observable<Product[]> {
	return this.productsController.getAllProducts();
  }

  public getProduct(productId: number): Observable<Product> {
	return this.productsController.getProduct(productId);
  }
}
