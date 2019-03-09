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

  response: { success: boolean, reason: string };

  constructor(public snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.userService.authenticateUser(this.loginForm.value)
      .subscribe(
        data => {
          if (data.success) {
            this.openSnackBar("Successfully Logged in", "close");
            console.log(data.user);
            this.loginForm.reset('');
          }
          else {
            this.openSnackBar(data.reason, "close");
            this.loginForm.controls['password'].reset('');
            console.log(data.reason);
          }
        }
      );
  }

  openSnackBar(message, action){
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top'
    });
  }

}
