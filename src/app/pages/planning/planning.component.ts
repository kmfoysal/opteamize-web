import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';
import { CalculationService } from 'src/app/services/calculation.service';
import { Job } from 'src/app/services/job.model';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  filteredString: string ='';

  // closeResult: string;

  hamburger:boolean = true;
  serachToggle:boolean = false;
  teamtoggle:boolean = false;
  teamSizetoggle:boolean = false;
  statustoggle:boolean = false;
  planningtoggle:boolean = false;
  timeWindowToggle:boolean = false;
  upadatedToggle:boolean = false;

  public calculations:Job[] = [];

  constructor(private calculationService: CalculationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.calculationService.getAllCalculations().subscribe((data) => (this.calculations = data))
  }


  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true  });
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
