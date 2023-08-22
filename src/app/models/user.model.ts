import { Address } from './address.model';

export interface Preferences {
	lang: string;
	darkMode: boolean;
	notifications: boolean;
	updates: boolean;
}

export interface User {
	id: number;
	email: string;
	avatar?: string;
	createDate: Date;
	firstname: string;
	lastname: string;
	address?: Address;
}

