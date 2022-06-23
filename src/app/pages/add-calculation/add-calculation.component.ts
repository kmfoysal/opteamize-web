import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculationService } from 'src/app/services/calculation.service';
import { Job } from 'src/app/services/job.model';

@Component({
  selector: 'app-add-calculation',
  templateUrl: './add-calculation.component.html',
  styleUrls: ['./add-calculation.component.scss']
})
export class AddCalculationComponent implements OnInit {

  public calculation: Job = {} as Job

  constructor(private calculationService: CalculationService, private router: Router) { }

  ngOnInit(): void {

  }

  public createSubmit(){
    this.calculationService.createCalculations(this.calculation).subscribe((data) => {
      this.calculation = data;
      this.router.navigate(['/']).then();
    })
  }

}
