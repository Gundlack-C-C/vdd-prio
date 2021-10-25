import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSVComponent } from './csv.component';
import { TableComponent } from './table/table.component';
import { CSVService } from './csv.service';

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
  ],
  providers: [
    CSVService
  ]

})
export class CSVModule { }
