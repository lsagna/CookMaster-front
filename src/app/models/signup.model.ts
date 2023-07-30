import { Preferences } from './user.model';

export interface SignUp {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	preferences: Preferences;
}
