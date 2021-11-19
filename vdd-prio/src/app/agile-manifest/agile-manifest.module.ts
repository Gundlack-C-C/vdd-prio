import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileManifestComponent } from './agile-manifest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { PrioFormComponent } from './prio-form/prio-form.component'
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MarkdownModule.forRoot()
  ],
  declarations: [
    AgileManifestComponent,
    PrioFormComponent
  ],
  exports: [AgileManifestComponent]
})
export class AgileManifestModule {

}
