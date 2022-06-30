import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbDatepicker, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-planning-calendar',
  templateUrl: './planning-calendar.component.html',
  styleUrls: ['./planning-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .custom-datepicker .ngb-dp-header {
      padding: 0;
    }
    .custom-datepicker .ngb-dp-content {
      display: grid;
      grid-template-columns: repeat(6,1fr);
      gap:15px;
    }
  `]
})
export class PlanningCalendarComponent implements OnInit {

  @ViewChild(NgbDatepicker, {static: true}) datepicker!: NgbDatepicker;

  constructor(public i18n: NgbDatepickerI18n) {}

  navigate(number: number) {
    const {state, calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
  }

  today() {
    const {calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getToday());
  }

  ngOnInit(): void {
  }

}
