/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentalDashboardViewComponent } from './mental-dashboard-view.component';

describe('MentalDashboardViewComponent', () => {
  let component: MentalDashboardViewComponent;
  let fixture: ComponentFixture<MentalDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
