import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  //private loggedIn = new BehaviorSubject<boolean>(false);

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  userLogged:Usuario=null;
  constructor() {}

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('User');
  }

  /*get isLogged():Observable<boolean> {
    return this.loggedIn.asObservable();
  }*/

  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login(user:Usuario ): void {
    console.log("Estoy en el servicio login");
    localStorage.setItem("accessToken",  user.id.toString());
    localStorage.setItem("User", user.name);
    this.userLogged = user;
    //localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
  }

  getUserLogged():string
  {
     if(this.userLogged!=null)
     {
       return this.userLogged.name;
     }
     else
     {
       return "";
     }
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout(): void {
    localStorage.removeItem('User');
    localStorage.removeItem('accessToken');
    this.userLogged = null;
    this.isLoginSubject.next(false);
  }

  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
