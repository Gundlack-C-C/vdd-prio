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
import { SectionModule } from '../section/section.module';
import { MarkdownModule } from 'ngx-markdown';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FeedbackService } from './feedback.service';
import { BusinessAppComponent } from './business-app/business-app.component';
import { BusinessLandingpageComponent } from './business-landingpage/business-landingpage.component';
import { AuthModule } from '../auth/auth.module';
import { BusinessAdminModule } from '../business-admin/business-admin.module';
import { MentalDashboardViewComponent } from './mental-dashboard-view/mental-dashboard-view.component';
import { MentalMonthlyComponent } from './mental-dashboard/mental-monthly/mental-monthly.component';
import { MentalTimelineComponent } from './mental-dashboard/mental-timeline/mental-timeline.component';
import { MentalCorrelationComponent } from './mental-dashboard/mental-correlation/mental-correlation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    PrioModule,
    GraphicsModule,
    NgbModule,
    SectionModule,
    BusinessAdminModule,
    AuthModule,
    MarkdownModule.forChild(),
    FontAwesomeModule
  ],
  declarations: [
    FlowcollectComponent,
    MentalFeedbackComponent,
    MentalFeedbackFormComponent,
    MentalDashboardComponent,
    MentalDashboardViewComponent,
    MentalFeedbackAppComponent,
    BusinessAppComponent,
    BusinessLandingpageComponent,
    MentalMonthlyComponent,
    MentalTimelineComponent,
    MentalCorrelationComponent
  ],
  providers: [FeedbackService],
  exports: [
    MentalFeedbackAppComponent,
    BusinessAppComponent,
    BusinessLandingpageComponent
  ]
})

export class FlowcollectModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
