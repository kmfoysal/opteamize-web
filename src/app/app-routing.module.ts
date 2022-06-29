import { AddCalculationComponent } from './pages/add-calculation/add-calculation.component';
import { CalculationsComponent } from './pages/calculations/calculations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueueComponent } from './pages/queue/queue.component';
import { CalculationResultComponent } from './pages/calculation-result/calculation-result.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', component: CalculationsComponent },
  { path: 'addcalculation', component: AddCalculationComponent },
  { path: 'calculations/:calculationId', component: CalculationResultComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
