import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  

  serachToggle:boolean = false;
  teamtoggle:boolean = false;
  teamSizetoggle:boolean = false;
  statustoggle:boolean = false;
  planningtoggle:boolean = false;
  timeWindowToggle:boolean = false;
  upadatedToggle:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  // For Number of teams

  teamsMinValue: number = 1;
  teamsMaxValue: number = 5;
  teamsOptions: Options = {
    floor: 0,
    ceil: 6,
    hidePointerLabels: true,
    hideLimitLabels: true,
  }

  // ------------------------


  // For teams size

  teamSizeMinValue: number = 1;
  teamSizeMaxValue: number = 5;
  teamSizeOptions: Options = {
    floor: 0,
    ceil: 6,
    hidePointerLabels: true,
    hideLimitLabels: true,
  }

  // ------------------------


  // For update

  updateMinValue: number = 1;
  updateMaxValue: number = 5;
  updateOptions: Options = {
    floor: 0,
    ceil: 6,
    hidePointerLabels: true,
    hideLimitLabels: true,
  }

  // ------------------------

}
