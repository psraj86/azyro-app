import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$ = new BehaviorSubject<User>({});
  loggedInUser = this.user$.asObservable();
  constructor() { }

  isLoggedIn(user:User){
    this.user$.next(user);
  }
}
