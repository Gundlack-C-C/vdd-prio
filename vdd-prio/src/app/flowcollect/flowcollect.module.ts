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
import { MentalDashboardComponent } from './mental-dashboard/mental-dashboard.component';
import { MentalFeedbackAppComponent } from './mental-feedback-app/mental-feedback-app.component';
import { SectionAdminModule } from '../section-admin/section-admin.module';
import { SectionModule } from '../section/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    PrioModule,
    GraphicsModule,
    NgbModule,
    SectionModule
  ],
  declarations: [
    FlowcollectComponent,
    MentalFeedbackComponent,
    MentalFeedbackFormComponent,
    MentalDashboardComponent,
    MentalFeedbackAppComponent
  ],
  exports: [
    MentalFeedbackAppComponent
  ]
})
export class FlowcollectModule { }
