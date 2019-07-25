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
  loggedIn: boolean = false;

  constructor(public addClimbService: AddClimbService) { }

  ngOnInit() {
   
    let userCheck = localStorage.length;
    console.log(userCheck);
    if (userCheck > 0 ) { this.loggedIn = true; }


  }

}
