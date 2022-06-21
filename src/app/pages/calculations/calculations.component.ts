import { Component, OnInit } from '@angular/core';
import { CalculationModel } from 'src/app/models/CalculationModel';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  public calculations:CalculationModel[] = [];

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
    this.calculationService.getAllCalculations().subscribe((data) => (this.calculations = data))
  }

}
