import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { CalculationService } from 'src/app/services/calculation.service';
import { Job } from 'src/app/services/job.model';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  filteredString: string ='';

  hamburger:boolean = true;
  serachToggle:boolean = false;
  teamtoggle:boolean = false;
  teamSizetoggle:boolean = false;
  statustoggle:boolean = false;
  planningtoggle:boolean = false;
  timeWindowToggle:boolean = false;
  upadatedToggle:boolean = false;

  public calculations:Job[] = [];

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
    this.calculationService.getAllCalculations().subscribe((data) => (this.calculations = data))
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
