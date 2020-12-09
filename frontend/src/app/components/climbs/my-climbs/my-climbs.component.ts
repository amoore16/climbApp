import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MyClimbsService } from './my-climbs.service';

@Component({
  selector: 'app-my-climbs',
  templateUrl: './my-climbs.component.html',
  styleUrls: ['./my-climbs.component.css']
})
export class MyClimbsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'rating'];
  dataSource: MatTableDataSource<any>;
  loading = true;
  climbs: any;
  opts: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private myClimbsService: MyClimbsService
    ) { }

  ngOnInit() {
    this.myClimbsService.getUserClimbs();

    let climbs = [];
    this.myClimbsService.myClimbs.subscribe(data => {
      if (data) {
        climbs.push(data);
      }
      this.climbs = climbs;
      this.dataSource = new MatTableDataSource<any>(this.climbs);
      this.dataSource.paginator = this.paginator;
    });
    setTimeout(()=> {
      if(this.climbs) this.loading = false;
    },2000);
  }

}
