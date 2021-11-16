import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PollComponent } from './poll.component';
import { PollResolver, PollService } from './poll.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PollSectionComponent } from './poll-section/poll-section.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PollDetailViewComponent } from './poll-detail-view/poll-detail-view.component';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrioModule } from '../prio/prio.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    NgbModule,
    PrioModule
  ],
  declarations: [
    PollComponent,
    PollSectionComponent,
    PollDetailComponent,
    PollDetailViewComponent
  ],
  providers: [
    PollService, PollResolver
  ],
  exports: [
    PollComponent,
    PollDetailViewComponent
  ]
})
export class PollModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
