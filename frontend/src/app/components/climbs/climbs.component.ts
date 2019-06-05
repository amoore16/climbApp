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
   


  }

}
