import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAdminComponent } from './business-admin.component';
import { BusinessAdminService } from './BusinessAdmin.service';
import { BusinessListgroupItemComponent } from './business-listgroup-item/business-listgroup-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BusinessEditFormComponent } from './business-edit-form/business-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  declarations: [
    BusinessAdminComponent,
    BusinessEditFormComponent,
    BusinessListgroupItemComponent,
  ],
  providers: [
    BusinessAdminService
  ],
  exports: [
    BusinessAdminComponent
  ]
})
export class BusinessAdminModule { }
