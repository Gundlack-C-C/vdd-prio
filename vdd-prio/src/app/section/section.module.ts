import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { SectionService } from './section.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SectionComponent
  ],
  providers: [
    SectionService
  ]

})
export class SectionModule { }
