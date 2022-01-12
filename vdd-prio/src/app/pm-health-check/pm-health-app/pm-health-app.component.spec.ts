/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmHealthAppComponent } from './pm-health-app.component';

describe('PmHealthAppComponent', () => {
  let component: PmHealthAppComponent;
  let fixture: ComponentFixture<PmHealthAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmHealthAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHealthAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
