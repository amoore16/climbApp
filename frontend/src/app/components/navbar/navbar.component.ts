import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  loggedIn: boolean = false;

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.authToken$.subscribe((token)=> {
      if (token) this.loggedIn = true;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userService.authToken$.unsubscribe();
  }

  onLogoutClick(){
    this.loggedIn = false;
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
