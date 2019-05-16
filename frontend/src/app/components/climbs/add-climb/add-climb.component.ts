import { Component, OnInit } from '@angular/core';
import { RouteDifficulty } from '../../../models/difficulty';
import { BoulderRatings } from '../../../models/boulderRatings';
import { StandardRatings } from '../../../models/standardRatings';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-climb',
  templateUrl: './add-climb.component.html',
  styleUrls: ['./add-climb.component.css']
})
export class AddClimbComponent implements OnInit {

  addClimbForm = new FormGroup({
    routeType: new FormControl(''),
    routeName: new FormControl(''),
    routeDifficulty: new FormControl('')
  });

  selectedValue: string;
  diffSelect: RouteDifficulty[];
  boulderDiff = BoulderRatings;
  standardDiff = StandardRatings;

  routeType: any[] = [
    {value: 'top rope', viewValue: 'Top Rope'},
    {value: 'sport', viewValue: 'Sport'},
    {value: 'trad', viewValue: 'Trad'},
    {value: 'boulder', viewValue: 'Boulder'}
  ];

  constructor() { }

  ngOnInit() {
    this.diffSelect = this.standardDiff;
  }
  
  onSelect(event){
    this.addClimbForm.get('routeDifficulty').reset();
    setTimeout(() => {
      if (this.addClimbForm.value.routeType === "boulder"){
        this.diffSelect = this.boulderDiff;
      } else {
        this.diffSelect = this.standardDiff;
      }
    });
  }

  onSubmit(){
    this.addClimbForm.reset();
  }

}
