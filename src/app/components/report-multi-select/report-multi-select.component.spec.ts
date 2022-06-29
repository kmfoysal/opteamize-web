import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMultiSelectComponent } from './report-multi-select.component';

describe('ReportMultiSelectComponent', () => {
  let component: ReportMultiSelectComponent;
  let fixture: ComponentFixture<ReportMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
