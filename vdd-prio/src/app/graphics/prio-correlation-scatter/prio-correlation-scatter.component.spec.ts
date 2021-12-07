/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrioCorrelationScatterComponent } from './prio-correlation-scatter.component';

describe('PrioCorrelationScatterComponent', () => {
  let component: PrioCorrelationScatterComponent;
  let fixture: ComponentFixture<PrioCorrelationScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioCorrelationScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioCorrelationScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
