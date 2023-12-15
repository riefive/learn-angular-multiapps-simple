import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeBlueHappyRoutingModule } from './bee-blue-happy-routing.module';
import { BeeBlueHappyComponent } from './bee-blue-happy.component';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

@NgModule({
  declarations: [
    BeeBlueHappyComponent
  ],
  imports: [
    CommonModule,
    BeeBlueHappyRoutingModule,
    LibBeehiveUiSharedModule
  ]
})
export class BeeBlueHappyModule { }
