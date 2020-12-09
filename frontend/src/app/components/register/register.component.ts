import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')  
  });
  
  constructor( private validateService: ValidateService,
               public snackBar: MatSnackBar,
               private userService: UserService,
               private router: Router
            ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.validateService.registerValidate(this.registerForm.value)){
      this.openSnackBar("Required Fields not met", "close");
    } else {
      this.addUser(this.registerForm.value);
    }
  }

  openSnackBar(message, action){
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  addUser(user) {
    this.userService.addUser(user).subscribe((data) => {
      if (data.success) {
        this.openSnackBar("Successfully Registered!", "close");
        this.registerForm.reset('');
        setTimeout(() =>{
          this.router.navigate(['/login']);
        }, 1000);
      } else {
        this.openSnackBar(data.reason, "close");
        this.registerForm.reset('');
      }

    });
  }


}
