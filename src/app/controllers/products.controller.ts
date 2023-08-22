import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { getBaseUrl } from '../utils/api';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductsController {
	private url = `http://localhost:3000/products`;

	constructor(private readonly http: HttpClient) {}

	public getAllProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(`${this.url}`);
	}

	public getProduct(productId: number): Observable<Product> {
		return this.http.get<Product>(`${this.url}/${productId}`, {
			responseType: 'json',
		});
	}
}
