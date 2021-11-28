import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgileManifestComponent } from './agile-manifest/agile-manifest.component';
import { BusinessAdminComponent } from './business-admin/business-admin.component';
import { CoachingAppComponent } from './flowcollect/coaching-app/coaching-app.component';
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

  { path: '',  component: HomeComponent },
  { path: 'polls',  component: PollSectionComponent },
  { path: 'poll/:key',  component: PollDetailViewComponent, resolve: {data: PollResolver} },
  { path: 'agile-manifest', component: AgileManifestComponent},
  { path: 'graphics', component: GraphicsDemoComponent},
  { path: 'flowcollect', component: FlowcollectComponent},
  { path: 'flowcollect-app', component: MentalFeedbackAppComponent},
  { path: 'flowcollect-app/:sectionID', component: MentalFeedbackAppComponent},
  { path: 'flowcollect-coaching-app/:voucherID', component: CoachingAppComponent},
  { path: 'flowcollect-dashboard', component: MentalDashboardComponent},
  { path: 'flowcollect-business-admin', component: BusinessAdminComponent},
  { path: '**', redirectTo:'polls' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
