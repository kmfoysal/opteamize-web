import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllZoneChartComponent } from './all-zone-chart.component';

describe('AllZoneChartComponent', () => {
  let component: AllZoneChartComponent;
  let fixture: ComponentFixture<AllZoneChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllZoneChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllZoneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
