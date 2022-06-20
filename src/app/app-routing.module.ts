import { AddCalculationComponent } from './pages/add-calculation/add-calculation.component';
import { CalculationsComponent } from './pages/calculations/calculations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: CalculationsComponent },
  { path: 'addcalculation', component: AddCalculationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
