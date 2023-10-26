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
	subscription: Subscription;
}

export interface Subscription {
	tier: SubscriptionTierEnum;
	type: SubscriptionTypeEnum;
	nextPayment: Date | null;
	createDate: Date;
}

export interface UserUpdateDTO {
	firstname: string;
	lastname: string;
	address?: Address;
}

export enum SubscriptionTierEnum {
	STARTER = 'STARTER',
	MASTER = 'MASTER',
  }
  
  export enum SubscriptionTypeEnum {
	UNIQUE = 'UNIQUE',
	MENSUAL = 'MENSUAL',
	ANNUAL = 'ANNUAL',
  }
  
