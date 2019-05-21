import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AddClimbService } from '../../../add-climb.service';

@Component({
  selector: 'app-all-climbs',
  templateUrl: './all-climbs.component.html',
  styleUrls: ['./all-climbs.component.css']
})
export class AllClimbsComponent implements OnInit {

  displayedColumns: string[] = ['user', 'routeName', 'routeType', 'routeDifficulty'];
  dataSource: MatTableDataSource<any>;
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public addClimbService: AddClimbService) { }

  ngOnInit() {
    let climbsObj = this.addClimbService.getClimbs();
    climbsObj.subscribe((data)=> {
      console.log('data', data);
      let climbs = [];
      climbs.push(data);
      setTimeout(()=> {
        
        if(climbs) this.loading = false;  //remove this, simulates server load..
      }, 1000);
      
      this.dataSource = new MatTableDataSource<any>(climbs[0]);
      this.dataSource.paginator = this.paginator;
    });
  }


}
