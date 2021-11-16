import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileManifestComponent } from './agile-manifest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  declarations: [AgileManifestComponent],
  exports: [AgileManifestComponent]
})
export class AgileManifestModule {

}
