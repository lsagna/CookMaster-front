import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { getBaseUrl } from '../utils/api';
import { User, UserUpdateDTO } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserController {
	private url = `http://localhost:3000/users`;

	constructor(private readonly http: HttpClient) {}

	public getUser(userId: number): Observable<User> {
		return this.http.get<User>(`${this.url}/${userId}`);
	}

	public updateUser(userId: number, userData: User): Observable<User> {
		return this.http.put<User>(`${this.url}/${userId}`, userData, {
			responseType: 'json',
		});
	}

	public unsubscribe(userId: number): Observable<User> {
		return this.http.put<User>(`${this.url}/${userId}`, {
			responseType: 'json',
		});
	}
}
