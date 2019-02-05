import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  registerValidate(user) {
    if(!user.firstname || !user.lastname || !user.username || !user.email || !user.password) {
      return false;
    } else {
      return true;
    }
  }

}
