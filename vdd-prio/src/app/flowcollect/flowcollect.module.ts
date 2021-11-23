import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowcollectComponent } from './flowcollect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentalFeedbackFormComponent } from './mental-feedback/mental-feedback-form/mental-feedback-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { MentalFeedbackComponent } from './mental-feedback/mental-feedback.component';
import { PrioModule } from '../prio/prio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphicsModule } from '../graphics/graphics.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    PrioModule,
    GraphicsModule,
    NgbModule
  ],
  declarations: [
    FlowcollectComponent,
    MentalFeedbackComponent,
    MentalFeedbackFormComponent
  ]
})
export class FlowcollectModule { }