import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DecodedToken } from '../models/decoded-token.model';
import { SignUp } from '../models/signup.model';
import jwt_decode from 'jwt-decode';
import { Token } from '../models/token.model';
import { Router } from '@angular/router';
import { SignIn } from '../models/signin.model';
import { AuthenticationController } from '../controllers/authentication.controller';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	decodedToken = {} as DecodedToken;
	constructor(
		private readonly authenticationController: AuthenticationController,
		private readonly router: Router
	) {
		if (this.isLogged()) {
			this.decodedToken = this.decodeToken(this.getToken()!);
		}
	}

	public getToken(): string | null {
		return localStorage.getItem('token');
	}

	public setLoginData(data: { token: string; refreshKey: string }): boolean {
		this.decodedToken = this.decodeToken(data.token);

		if (this.decodedToken.role !== 'STANDARD') return false;

		localStorage.setItem('token', data.token);
		localStorage.setItem('refreshKey', data.refreshKey);
		return true;
	}

	public signIn(credential: SignIn): Observable<Token> {
		return this.authenticationController.signIn(credential);
	}

	public signUp(registerData: SignUp): Observable<User> {
		return this.authenticationController.signUp(registerData);
	}

	public isLogged(): boolean {
		const currentToken = this.getToken();
		return !!currentToken;
	}

	public decodeToken(token: string): DecodedToken {
		return jwt_decode(token);
	}

	public refreshToken(): Observable<Token> {
		const refreshKey = localStorage.getItem('refreshKey')!;
		return this.authenticationController.getRefreshToken(
			this.decodedToken.id,
			refreshKey
		);
	}

	public logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('refreshKey');
		this.router.navigate(['/']).then();
	}
}
