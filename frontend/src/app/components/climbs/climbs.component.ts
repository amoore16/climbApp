import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climbs',
  templateUrl: './climbs.component.html',
  styleUrls: ['./climbs.component.css']
})
export class ClimbsComponent implements OnInit {

  loading: boolean = true;
  climbs: any;
  loggedIn: boolean = false;
  addingClimb: boolean = false;

  constructor(public addClimbService: AddClimbService) { }

  ngOnInit() {
  }

  addClimb() {
    this.addingClimb = true;
  }

}
