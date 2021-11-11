import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PollDetailViewComponent } from './poll/poll-detail-view/poll-detail-view.component';
import { PollSectionComponent } from './poll/poll-section/poll-section.component';

const routes: Routes = [

  { path: '',  component: HomeComponent },
  { path: 'polls',  component: PollSectionComponent },
  { path: 'poll/:key',  component: PollDetailViewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
