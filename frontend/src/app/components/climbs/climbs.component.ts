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
    setTimeout(()=> {
      this.loading = false;
    }, 5000);
  }

}
