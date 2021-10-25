import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSVComponent } from './csv.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CSVComponent
  ],
  exports: [
    CSVComponent
  ]
})
export class CSVModule { }
