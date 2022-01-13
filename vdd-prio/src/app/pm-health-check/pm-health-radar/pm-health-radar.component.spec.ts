/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmHealthRadarComponent } from './pm-health-radar.component';

describe('PmHealthRadarComponent', () => {
  let component: PmHealthRadarComponent;
  let fixture: ComponentFixture<PmHealthRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmHealthRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHealthRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
