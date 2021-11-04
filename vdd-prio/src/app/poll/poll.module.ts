import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import { PollService } from './poll.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { PollSectionComponent } from './poll-section/poll-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFirestoreModule
  ],
  declarations: [
    PollComponent,
    PollSectionComponent
  ],
  providers: [
    PollService
  ],
  exports: [
    PollComponent
  ]
})
export class PollModule { }
