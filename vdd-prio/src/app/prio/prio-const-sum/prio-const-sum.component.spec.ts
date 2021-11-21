/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrioConstSumComponent } from './prio-const-sum.component';

describe('PrioConstSumComponent', () => {
  let component: PrioConstSumComponent;
  let fixture: ComponentFixture<PrioConstSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioConstSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioConstSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
