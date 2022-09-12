import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDatepicker,
  NgbDatepickerI18n,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { CalculationService } from 'src/app/services/calculation.service';
import { Job } from 'src/app/services/job.model';

@Component({
  selector: 'app-planning-calendar',
  templateUrl: './planning-calendar.component.html',
  styleUrls: ['./planning-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .custom-datepicker .ngb-dp-header {
        padding: 0;
      }
      .custom-datepicker .ngb-dp-content {
        /* display: grid;
      grid-template-columns: repeat(12,1fr); */
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
      }
    `,
  ],
})
export class PlanningCalendarComponent implements OnInit {
  @ViewChild(NgbDatepicker, { static: true }) datepicker!: NgbDatepicker;

  calculations: Job[] = [];

  disabledDates: NgbDateStruct[] = [];

  model: NgbDateStruct | undefined;
  date: { year: number; month: number } | undefined;


  constructor(
    private calculationService: CalculationService,
    public i18n: NgbDatepickerI18n,
  ) {}

  isDisabled: any;

  ngOnInit(): void {
    this.calculationService.getAllCalculations().subscribe(
      (data) => {
        this.calculations = data;

        console.log(this.calculations.length);

        this.calculations.map((i) =>
          this.disabledDates.push({
            year: parseInt(moment(i.startDate, 'YYYY/MM/DD').format('YYYY')),
            month: parseInt(moment(i.startDate, 'YYYY/MM/DD').format('M')),
            day: parseInt(moment(i.startDate, 'YYYY/MM/DD').format('D')),
          })
        );

        console.log(this.disabledDates.length);

         this.isDisabled = (date: NgbDate) => {
          return this.disabledDates.find((x) => date.equals(NgbDate.from(x)))
            ? true
            : false;
        };
      }

    );
  }

  navigate(number: number) {
    const { state, calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
  }

  today() {
    const { calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getToday());
  }
}
