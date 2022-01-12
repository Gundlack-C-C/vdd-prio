/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmHealthWeightGaugeComponent } from './pm-health-weight-gauge.component';

describe('PmHealthWeightGaugeComponent', () => {
  let component: PmHealthWeightGaugeComponent;
  let fixture: ComponentFixture<PmHealthWeightGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmHealthWeightGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHealthWeightGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
