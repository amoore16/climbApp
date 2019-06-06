import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { UserService } from '../../../services/user.service';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MyClimbsService {

  private climbsUrl = 'http://localhost:3000/climbs/';

  constructor(private http: HttpClient, public userService: UserService) { }


  getUserClimbs(){
    console.log('getting climbs...');
    let user = this.userService.getProfile();
    user.subscribe((user) => {
      user.climbs.forEach( climb => {
        console.log('climb: ', climb);
        let returnedClimb = this.getClimbData(climb)
        returnedClimb.subscribe((climbData) => {
          console.log('climbdata:', climbData);
        })
      })
    })
  }

  getClimbData(climb){
    console.log('getting climb data with...', this.climbsUrl + climb,);
    return this.http.get<any>(this.climbsUrl + climb, httpOptions).pipe(
      tap(data => { return data},
        err => { return err })
    );
  }

}
