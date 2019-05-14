import { Component, OnInit } from '@angular/core';
import { BoulderDifficulty } from '../../../models/difficulty';
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
  diffSelect: BoulderDifficulty[];

  boulderDiff: BoulderDifficulty[] = [
    {value: 'v1', viewValue: 'V1'},
    {value: 'v2', viewValue: 'V2'},
    {value: 'v3', viewValue: 'V3'},
    {value: 'v4', viewValue: 'V4'},
    {value: 'v5', viewValue: 'V5'},
    {value: 'v6', viewValue: 'V6'},
    {value: 'v7', viewValue: 'V7'},
    {value: 'v8', viewValue: 'V8'},
    {value: 'v9', viewValue: 'V9'},
    {value: 'v10', viewValue: 'V10'},
    {value: 'v11', viewValue: 'V11'},
    {value: 'v12', viewValue: 'V12'},
  ];

  standardDiff: BoulderDifficulty[] = [
    {value: '5.5', viewValue: '5.5' },
    {value: '5.6', viewValue: '5.6' },
    {value: '5.7', viewValue: '5.7' },
    {value: '5.8', viewValue: '5.8' },
    {value: '5.9', viewValue: '5.9' },
    {value: '5.10a', viewValue: '5.10a' },
    {value: '5.10b', viewValue: '5.10b' },
    {value: '5.10c', viewValue: '5.10c' },
    {value: '5.10d', viewValue: '5.10d' },
    {value: '5.11', viewValue: '5.11' },
    {value: '5.12', viewValue: '5.12' },
    {value: '5.13', viewValue: '5.13' },
    {value: '5.14', viewValue: '5.14' },

  ];

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
    // console.log('event', event);
    
    this.addClimbForm.get('routeDifficulty').reset;
    
    setTimeout(() => {
      let value =  this.addClimbForm.get('routeDifficulty');    
      console.log('value', value);
      console.log('full form', this.addClimbForm.value.routeType);
      if (this.addClimbForm.value.routeType === "boulder"){
        this.diffSelect = this.boulderDiff;
      } else {
        this.diffSelect = this.standardDiff;
      }
    }, 200);
    
    // if (value === "boulder") {
    //   this.addClimbForm.get('routeDifficulty').reset;
    //   this.diffSelect = this.boulderDiff;
    // } else {
    //   this.diffSelect = this.standardDiff;
    // }
  }

  onSubmit(){
    console.log('hello')
    console.log('climb form: ', this.addClimbForm.value);
  }

}
