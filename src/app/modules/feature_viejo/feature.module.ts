import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { EnrutableComponent } from './enrutable/enrutable.component';


@NgModule({
  declarations: [EnrutableComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports:[EnrutableComponent]
})
export class FeatureModule { }
