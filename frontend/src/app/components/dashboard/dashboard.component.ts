import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'email'];
  dataSource: MatTableDataSource<User>;
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    console.log('loading', this.loading);
    let usersObj = this.userService.getUsers();
    usersObj.subscribe((data)=> {
      let users = [];
      users.push(data);
      setTimeout(()=> {
        
        if(users) this.loading = false;  
      }, 2000);
      
      this.dataSource = new MatTableDataSource<User>(users[0]);
      this.dataSource.paginator = this.paginator;
    });

  }
  



}
