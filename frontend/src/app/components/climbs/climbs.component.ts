import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climbs',
  templateUrl: './climbs.component.html',
  styleUrls: ['./climbs.component.css']
})
export class ClimbsComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {       // remove this, simulates server load..
      this.loading = false;
    }, 2000);
  }

}
