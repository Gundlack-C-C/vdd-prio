/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentalMonthlyComponent } from './mental-monthly.component';

describe('MentalMonthlyComponent', () => {
  let component: MentalMonthlyComponent;
  let fixture: ComponentFixture<MentalMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
