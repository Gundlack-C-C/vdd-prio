import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrioComponent } from './prio.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrioComponent,
    TableComponent
  ],
  exports: [
    PrioComponent
  ]
})
export class PrioModule { }
