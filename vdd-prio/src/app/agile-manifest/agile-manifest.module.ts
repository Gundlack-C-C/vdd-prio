import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileManifestComponent } from './agile-manifest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [AgileManifestComponent],
  exports: [AgileManifestComponent]
})
export class AgileManifestModule {

}
