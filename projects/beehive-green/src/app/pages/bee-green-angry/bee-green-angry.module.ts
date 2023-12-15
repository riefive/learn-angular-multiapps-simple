import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeGreenAngryRoutingModule } from './bee-green-angry-routing.module';
import { BeeGreenAngryComponent } from './bee-green-angry.component';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

@NgModule({
  declarations: [
    BeeGreenAngryComponent
  ],
  imports: [
    CommonModule,
    BeeGreenAngryRoutingModule,
    LibBeehiveUiSharedModule
  ]
})
export class BeeGreenAngryModule { }
