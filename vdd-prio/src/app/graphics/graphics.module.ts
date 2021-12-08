import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { PrioBarchartComponent } from './prio-barchart/prio-barchart.component';
import { PrioSeriesComponent } from './prio-series/prio-series.component';
import { GraphicsDemoComponent } from './graphics-demo/graphics-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrioCorrelationScatterComponent } from './prio-correlation-scatter/prio-correlation-scatter.component';
import { PrioCorrelationSankeyComponent } from './prio-correlation-sankey/prio-correlation-sankey.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule
  ],
  declarations: [
    PrioBarchartComponent,
    PrioSeriesComponent,
    PrioCorrelationScatterComponent,
    PrioCorrelationSankeyComponent,
    GraphicsDemoComponent
  ],
  exports: [
    PrioBarchartComponent,
    PrioSeriesComponent,
    PrioCorrelationScatterComponent,
    PrioCorrelationSankeyComponent,
    GraphicsDemoComponent
  ]
})
export class GraphicsModule { }
