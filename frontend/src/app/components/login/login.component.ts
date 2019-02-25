import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor( public snackBar: MatSnackBar,
               private userService: UserService
              ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.userService.authenticateUser(this.loginForm.value)
    .subscribe(data => console.log(data)
    ); 

  }

}
