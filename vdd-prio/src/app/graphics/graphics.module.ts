import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { PrioBarchartComponent } from './prio-barchart/prio-barchart.component';
import { PrioSeriesComponent } from './prio-series/prio-series.component';
import { GraphicsDemoComponent } from './graphics-demo/graphics-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule
  ],
  declarations: [
    PrioBarchartComponent,
    PrioSeriesComponent,
    GraphicsDemoComponent
  ],
  exports: [
    PrioBarchartComponent,
    PrioSeriesComponent,
    GraphicsDemoComponent
  ]
})
export class GraphicsModule { }
