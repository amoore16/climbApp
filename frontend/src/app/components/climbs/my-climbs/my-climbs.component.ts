import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
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
    this.myClimbsService.getUserClimbs();
  }

}
