import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgileManifestComponent } from './agile-manifest/agile-manifest.component';
import { FlowcollectComponent } from './flowcollect/flowcollect.component';
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
  { path: 'flowcollect', component: FlowcollectComponent},
  { path: '**', redirectTo:'polls' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
