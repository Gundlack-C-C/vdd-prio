import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrioComponent } from './prio.component';
import { TableComponent } from './table/table.component';
import { RelPrioComponent } from './rel-prio/rel-prio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrioEditFormComponent } from './prio-edit-form/prio-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrioComponent,
    RelPrioComponent,
    TableComponent,
    PrioEditFormComponent
  ],
  exports: [
    PrioComponent,
    PrioEditFormComponent
  ]
})
export class PrioModule { }
