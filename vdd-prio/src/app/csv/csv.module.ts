import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSVComponent } from './csv.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CSVComponent,
    TableComponent
  ],
  exports: [
    CSVComponent
  ]
})
export class CSVModule { }
