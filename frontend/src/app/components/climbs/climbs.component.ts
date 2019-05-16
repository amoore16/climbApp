import { Component, OnInit } from '@angular/core';

import { AddClimbService } from '../../add-climb.service';

@Component({
  selector: 'app-climbs',
  templateUrl: './climbs.component.html',
  styleUrls: ['./climbs.component.css']
})
export class ClimbsComponent implements OnInit {

  loading: boolean = true;
  climbs: any;

  constructor(public addClimbService: AddClimbService) { }

  ngOnInit() {
    setTimeout(()=> {       // remove this, simulates server load..
      this.loading = false;

      
    }, 2000);

    let climbsObj = this.addClimbService.getClimbs();
    climbsObj.subscribe( climbs => {
      console.log(climbs);
    })

  }

}
