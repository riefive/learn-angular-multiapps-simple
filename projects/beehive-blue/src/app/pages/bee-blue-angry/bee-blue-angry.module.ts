import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeBlueAngryRoutingModule } from './bee-blue-angry-routing.module';
import { BeeBlueAngryComponent } from './bee-blue-angry.component';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

@NgModule({
  declarations: [
    BeeBlueAngryComponent
  ],
  imports: [
    CommonModule,
    BeeBlueAngryRoutingModule,
    LibBeehiveUiSharedModule
  ]
})
export class BeeBlueAngryModule { }
