/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentalCorrelationScatterComponent } from './mental-correlation-scatter.component';

describe('MentalCorrelationScatterComponent', () => {
  let component: MentalCorrelationScatterComponent;
  let fixture: ComponentFixture<MentalCorrelationScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalCorrelationScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalCorrelationScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
