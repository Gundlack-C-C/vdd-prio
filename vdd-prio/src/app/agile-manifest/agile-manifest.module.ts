import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileManifestComponent } from './agile-manifest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [AgileManifestComponent],
  exports: [AgileManifestComponent]
})
export class AgileManifestModule {

}
