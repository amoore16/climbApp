import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'email'];
  dataSource: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {

    let usersObj = this.userService.getUsers();
    usersObj.subscribe((data)=> {
      this.dataSource = data;
    });

  }





}
