import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgileManifestComponent } from './agile-manifest/agile-manifest.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthViewComponent } from './auth/AuthView/AuthView.component';
import { BusinessAdminComponent } from './business-admin/business-admin.component';
import { BusinessAppComponent } from './flowcollect/business-app/business-app.component';
import { BusinessLandingpageComponent } from './flowcollect/business-landingpage/business-landingpage.component';
import { FlowcollectComponent } from './flowcollect/flowcollect.component';
import { MentalDashboardComponent } from './flowcollect/mental-dashboard/mental-dashboard.component';
import { MentalFeedbackAppComponent } from './flowcollect/mental-feedback-app/mental-feedback-app.component';
import { GraphicsDemoComponent } from './graphics/graphics-demo/graphics-demo.component';
import { HomeComponent } from './Home/Home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PollDetailViewComponent } from './poll/poll-detail-view/poll-detail-view.component';
import { PollSectionComponent } from './poll/poll-section/poll-section.component';
import { PollResolver } from './poll/poll.service';

const routes: Routes = [

  { path: 'auth/:view', component: AuthViewComponent },
  { path: 'polls',  component: PollSectionComponent },
  { path: 'poll/:key',  component: PollDetailViewComponent, resolve: {data: PollResolver} },
  { path: 'agile-manifest', component: AgileManifestComponent},
  { path: 'graphics', component: GraphicsDemoComponent},
  { path: 'flowcollect-app', component: MentalFeedbackAppComponent},
  { path: 'flowcollect-app/:sectionID', component: MentalFeedbackAppComponent},
  {
    path: 'flowcollect-app-unternehmer',
    component: BusinessAppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flowcollect-app-unternehmer/:businessID',
    component: BusinessAppComponent,
    canActivate: [AuthGuard]
  },
  { path: 'flowcollect-dashboard', component: MentalDashboardComponent},
  { path: 'flowcollect-business-admin', component: BusinessAdminComponent},
  { path: '', redirectTo: 'flowcollect', pathMatch: 'full' },
  { path: 'flowcollect', component: BusinessLandingpageComponent},
  { path: 'flowcollect/:view', component: BusinessLandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
