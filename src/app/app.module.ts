import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculationsComponent } from './pages/calculations/calculations.component';
import { AddCalculationComponent } from './pages/add-calculation/add-calculation.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { RangeDatePickerComponent } from './components/range-date-picker/range-date-picker.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FilterPipesPipe } from './pipes/filter-pipes.pipe';
import { QueueComponent } from './pages/queue/queue.component';
import { CalculationResultComponent } from './pages/calculation-result/calculation-result.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ReportComponent } from './pages/report/report.component';
import { ReportMultiSelectComponent } from './components/report-multi-select/report-multi-select.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AllZoneChartComponent } from './components/all-zone-chart/all-zone-chart.component';
import { ZoneOneComponent } from './components/zone-one/zone-one.component';
import { ZoneTwoComponent } from './components/zone-two/zone-two.component';
import { ZoneThreeComponent } from './components/zone-three/zone-three.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarChartOneComponent } from './components/bar-chart-one/bar-chart-one.component';
import { BarChartTwoComponent } from './components/bar-chart-two/bar-chart-two.component';
import { BarChartThreeComponent } from './components/bar-chart-three/bar-chart-three.component';
import { ReportDatePickerComponent } from './components/report-date-picker/report-date-picker.component';
import { PlanningCalendarComponent } from './components/planning-calendar/planning-calendar.component';



@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, CalculationsComponent, AddCalculationComponent, SideBarComponent, RangeDatePickerComponent, FilterPipesPipe, QueueComponent, CalculationResultComponent, PageNotFoundComponent, PlanningComponent, ReportComponent, ReportMultiSelectComponent, AllZoneChartComponent, ZoneOneComponent, ZoneTwoComponent, ZoneThreeComponent, BarChartComponent, BarChartOneComponent, BarChartTwoComponent, BarChartThreeComponent, ReportDatePickerComponent, PlanningCalendarComponent, ],

  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule, Ng5SliderModule,NgMultiSelectDropDownModule.forRoot(), AngularSvgIconModule.forRoot(), NgApexchartsModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
