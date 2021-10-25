/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RelPrioComponent } from './rel-prio.component';

describe('RelPrioComponent', () => {
  let component: RelPrioComponent;
  let fixture: ComponentFixture<RelPrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelPrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelPrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
