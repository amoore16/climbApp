import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { UserService } from './services/user.service';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AddClimbService {

  private climbsUrl = 'climbs/';

  constructor(private http: HttpClient, public userService: UserService) { }

  user: any;
  userId: string;
  authToken: any;

  getProfileId(){
    let userProfile = this.userService.getProfile();
    userProfile.subscribe(prof => this.userId = prof.id);
  }

  getClimbs(): Observable<any>{
    return this.http.get(this.climbsUrl);
  }

  addClimb(climb: any): Observable<any>{
    climb.user = this.userId;
    return this.http.post<any>(this.climbsUrl, climb, httpOptions).pipe(
      tap(data => { return data},
          err => {return err})
    );
  }
  
}
