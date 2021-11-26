/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentalFeedbackAppComponent } from './mental-feedback-app.component';

describe('MentalFeedbackAppComponent', () => {
  let component: MentalFeedbackAppComponent;
  let fixture: ComponentFixture<MentalFeedbackAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalFeedbackAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalFeedbackAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
