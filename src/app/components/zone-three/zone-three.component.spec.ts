import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneThreeComponent } from './zone-three.component';

describe('ZoneThreeComponent', () => {
  let component: ZoneThreeComponent;
  let fixture: ComponentFixture<ZoneThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
