import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { PrioBarchartComponent } from './prio-barchart/prio-barchart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  declarations: [
    PrioBarchartComponent
  ],
  exports: [
    PrioBarchartComponent
  ]
})
export class GraphicsModule { }
