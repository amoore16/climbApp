import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')  
  });
  
  constructor( private validateService: ValidateService,
               public snackBar: MatSnackBar,
               private userService: UserService
            ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.validateService.registerValidate(this.registerForm.value)){
      this.openSnackBar("Required Fields not met", "close");
    } else {
      this.addUser(this.registerForm.value);
      this.openSnackBar("Success!", "close");
      this.registerForm.reset('');
    }
  }

  openSnackBar(message, action){
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  addUser(user) {
    this.userService.addUser(user).subscribe(() => {});
  }


}
