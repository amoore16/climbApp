import { Component, OnInit } from '@angular/core';
import { BoulderDifficulty } from '../../../models/difficulty';

@Component({
  selector: 'app-add-climb',
  templateUrl: './add-climb.component.html',
  styleUrls: ['./add-climb.component.css']
})
export class AddClimbComponent implements OnInit {

  selectedValue: string;

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

  constructor() { }

  ngOnInit() {

    

  }

}
