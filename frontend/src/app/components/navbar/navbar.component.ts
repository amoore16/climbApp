import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.userService.logOut();
    this.openSnackBar("You are logged out", "close");
    this.router.navigate(['/login']);
    return false;
  }

  openSnackBar(message, action){
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top'
    });
  }
  

}
