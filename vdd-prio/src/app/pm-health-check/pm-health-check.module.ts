import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmHealthCheckComponent } from './pm-health-check.component';
import { PmHealthFormComponent } from './pm-health-form/pm-health-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PmHealthAppComponent } from './pm-health-app/pm-health-app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PmHealthAnalyticsComponent } from './pm-health-analytics/pm-health-analytics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PmHealthWeightGraphComponent } from './pm-health-weight-graph/pm-health-weight-graph.component';
import { PmHealthWeightGaugeComponent } from './pm-health-weight-gauge/pm-health-weight-gauge.component';
import { PmHealthRadarComponent } from './pm-health-radar/pm-health-radar.component';
import { PmHealthFactorItemComponent } from './pm-health-factor-item/pm-health-factor-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PmHealthBarComponent } from './pm-health-bar/pm-health-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxEchartsModule,
    NgbModule
  ],
  declarations: [
    PmHealthCheckComponent,
    PmHealthFormComponent,
    PmHealthAppComponent,
    PmHealthAnalyticsComponent,
    PmHealthWeightGraphComponent,
    PmHealthWeightGaugeComponent,
    PmHealthRadarComponent,
    PmHealthFactorItemComponent,
    PmHealthBarComponent
  ]
})
export class PmHealthCheckModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
