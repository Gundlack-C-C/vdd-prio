import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PollComponent } from './poll.component';
import { PollService } from './poll.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PollSectionComponent } from './poll-section/poll-section.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularFirestoreModule
  ],
  declarations: [
    PollComponent,
    PollSectionComponent,
    PollDetailComponent
  ],
  providers: [
    PollService
  ],
  exports: [
    PollComponent
  ]
})
export class PollModule { }
