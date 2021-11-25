import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAdminComponent } from './section-admin.component';
import { SectionAdminService } from './section-admin.service';
import { SectionEditFormComponent } from './section-edit-form/section-edit-form.component';
import { SectionDropdownComponent } from './section-dropdown/section-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    NgbModule
  ],
  declarations: [
    SectionAdminComponent,
    SectionEditFormComponent,
    SectionDropdownComponent
  ],
  providers: [
    SectionAdminService
  ],
  exports: [
    SectionAdminComponent
  ]
})
export class SectionAdminModule { }
