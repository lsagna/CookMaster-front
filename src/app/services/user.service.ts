import { Injectable } from '@angular/core';
import { User, UserUpdateDTO } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserController } from '../controllers/user.controller';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly userController: UserController) { }

  public getUser(id: number): Observable<User> {
	return this.userController.getUser(id);
  }

  public updateUser(id: number, data: User): Observable<User> {
	return this.userController.updateUser(id, data);
  }
}
