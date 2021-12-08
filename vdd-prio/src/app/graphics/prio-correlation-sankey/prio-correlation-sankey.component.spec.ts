/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrioCorrelationSankeyComponent } from './prio-correlation-sankey.component';

describe('PrioCorrelationSankeyComponent', () => {
  let component: PrioCorrelationSankeyComponent;
  let fixture: ComponentFixture<PrioCorrelationSankeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioCorrelationSankeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioCorrelationSankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
