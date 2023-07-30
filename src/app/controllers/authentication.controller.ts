import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';
import { SignUp } from '../models/signup.model';
//import { getBaseUrl } from '../utils/api';
import { SignIn } from '../models/signin.model';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationController {
	private url = `http://localhost:3000/auth`;

	constructor(private readonly http: HttpClient) {}

	public signIn(credential: SignIn): Observable<Token> {
		const i = {}
		return this.http.post<Token>(`${this.url}/login`, credential);
	}

	public signUp(registerData: SignUp): Observable<User> {
		return this.http.post<User>(`${this.url}/register`, registerData, {
			responseType: 'json',
		});
	}

	public getRefreshToken(id: number, key: string): Observable<Token> {
		const queryParams = new HttpParams().set('key', key);
		return this.http.get<Token>(`${this.url}/token/${id}/refresh`, {
			params: queryParams,
		});
	}

}
