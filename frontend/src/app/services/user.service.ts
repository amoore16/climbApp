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

  getUsers(): Observable<User> {
    return this.http.get<User>(this.usersUrl)
  }

  addUser(user: User): Observable<User>{
    console.log(user);
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap(data => console.log(data))
    );
  }

  authenticateUser(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl + 'auth', user, httpOptions).pipe(
      tap(data => console.log(data))
    );
  }
  
}
