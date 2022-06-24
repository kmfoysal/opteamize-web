import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CalculationService } from 'src/app/services/calculation.service';
import { Job } from 'src/app/services/job.model';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss'],
})
export class CalculationResultComponent implements OnInit {

  errorShow: boolean = false;

  public id: string | null = null;

  public calculation: Job = {} as Job;

  constructor(
    private activatedRoute: ActivatedRoute,
    private calculationService: CalculationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('calculationId');
    });

    if (this.id) {
      this.calculationService
        .getSingleCalculations(this.id)
        .subscribe((i) => (this.calculation = i));
    }
  }

  public isNotEmpty() {
    return Object.keys(this.calculation).length > 0;
  }
}
