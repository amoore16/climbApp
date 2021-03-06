import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    let usersObj = this.userService.getUsers();
    usersObj.subscribe((data)=> {
      let users = [];
      users.push(data);
      setTimeout(()=> {
        
        if(users) this.loading = false;  //remove this, simulates server load..
      }, 1000);
      
      this.dataSource = new MatTableDataSource<User>(users[0]);
      this.dataSource.paginator = this.paginator;
    });

  }
  



}
