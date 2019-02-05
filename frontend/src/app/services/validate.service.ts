import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  registerValidate(user) {
    if(!user.firstname || !user.lastname || !user.username || !user.email || !user.password) {
      console.log('false');
      return false;
    } else {
      console.log(user);
      return true;
    }
  }

}
