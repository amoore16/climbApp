import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AddClimbService } from '../../../add-climb.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-climbs',
  templateUrl: './all-climbs.component.html',
  styleUrls: ['./all-climbs.component.css']
})
export class AllClimbsComponent implements OnInit {

  displayedColumns: string[] = ['user', 'routeName', 'routeType', 'routeDifficulty'];
  dataSource: MatTableDataSource<any>;
  loading: boolean = true;
  users: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public addClimbService: AddClimbService, public userService: UserService) { }

  ngOnInit() {
    
    let usersObj = this.userService.getUsers();
    usersObj.subscribe(user => {
      if (user) {
        let users = [];
        users.push(user);

        this.users = users[0];
      };
    });
    
    let climbsObj = this.addClimbService.getClimbs();
    climbsObj.subscribe((data)=> {
      data.forEach(climb => {
        if (climb.user) {
          climb.user = this.getUserName(climb);
        }
      });
      let climbs = [];
      climbs.push(data);
      setTimeout(()=> {
        
        if(climbs) this.loading = false;  //remove this, simulates server load..
      }, 1000);
      
      this.dataSource = new MatTableDataSource<any>(climbs[0]);
      this.dataSource.paginator = this.paginator;
    });

    
  }

  getUserName(climbData) {
    console.log(climbData);
    let userName: string = null;
    if (this.users && climbData.user[0]) {
      this.users.forEach( user => {
        if (user._id === climbData.user[0]) {
          userName = user.userName
        }
      })
    }
     return userName
  }


}
