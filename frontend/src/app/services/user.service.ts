import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  user: any;
  authToken: any;

  getUsers(): Observable<User> {
    return this.http.get<User>(this.usersUrl)
  }

  addUser(user: User): Observable<any>{
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap(data => { return data},
          err => {return err})
    );
  }

  authenticateUser(user: User): Observable<any>{
    return this.http.post<User>(this.usersUrl + 'auth', user, httpOptions).pipe(
      tap(
        data => {return data},
        ),
        catchError( err => {return err})
    );
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getProfile(){
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.error)
      return of(result as T);
    }
  }
  
}
