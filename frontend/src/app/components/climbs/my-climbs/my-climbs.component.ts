import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyClimbsService } from './my-climbs.service';

@Component({
  selector: 'app-my-climbs',
  templateUrl: './my-climbs.component.html',
  styleUrls: ['./my-climbs.component.css']
})
export class MyClimbsComponent implements OnInit {

  constructor(
    private myClimbsService: MyClimbsService
    ) { }

  ngOnInit() {
    let myClimbs = this.myClimbsService.getUserClimbs();
    console.log('my climbs', myClimbs);

    this.myClimbsService.myClimbs.subscribe(data => {
      console.log('dataaaa: ', data);
    })
  }

}
