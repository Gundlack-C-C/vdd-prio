import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedAppComponent } from './connected-app.component';
import { GraphicsModule } from '../graphics/graphics.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GraphicsModule,
    FormsModule
  ],
  declarations: [ConnectedAppComponent]
})
export class ConnectedAppModule { }
