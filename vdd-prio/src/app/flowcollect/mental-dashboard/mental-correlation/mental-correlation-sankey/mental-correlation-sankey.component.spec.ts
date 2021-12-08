/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentalCorrelationSankeyComponent } from './mental-correlation-sankey.component';

describe('MentalCorrelationSankeyComponent', () => {
  let component: MentalCorrelationSankeyComponent;
  let fixture: ComponentFixture<MentalCorrelationSankeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalCorrelationSankeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalCorrelationSankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
