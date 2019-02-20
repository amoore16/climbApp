import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  registerValidate(user) {
    if(!user.firstName || !user.lastName || !user.userName || !user.email || !user.password) {
      return false;
    } else {
      return true;
    }
  }

}
