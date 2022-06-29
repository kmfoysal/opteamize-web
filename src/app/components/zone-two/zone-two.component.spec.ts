import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTwoComponent } from './zone-two.component';

describe('ZoneTwoComponent', () => {
  let component: ZoneTwoComponent;
  let fixture: ComponentFixture<ZoneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
