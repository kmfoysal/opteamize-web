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

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, CalculationsComponent, AddCalculationComponent, SideBarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
