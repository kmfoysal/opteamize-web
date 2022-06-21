import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculationModel } from 'src/app/models/CalculationModel';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-add-calculation',
  templateUrl: './add-calculation.component.html',
  styleUrls: ['./add-calculation.component.scss']
})
export class AddCalculationComponent implements OnInit {

  public calculation: CalculationModel = {} as CalculationModel

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
