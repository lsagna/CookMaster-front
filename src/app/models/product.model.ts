import { Address } from "./address.model";
import { User } from "./user.model";

export interface Product {
	id: number;
	creator: User;
	name: string;
	description: string;
	images: string[];
	type: ProductType;
	price: number;
	stock: number;
	startTime: Date|null;
	duration: Date|null;
	address: Address|null;
}

export interface CartItem {
	item: Product,
	quantity: number
}

export enum ProductType {
	MATERIAL = 'MATERIAL',
	EVENT = 'EVENT'
}