import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrioComponent } from './prio.component';
import { TableComponent } from './table/table.component';
import { RelPrioComponent } from './rel-prio/rel-prio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    PrioComponent,
    RelPrioComponent,
    TableComponent
  ],
  exports: [
    PrioComponent
  ]
})
export class PrioModule { }
