import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeRedAngryRoutingModule } from './bee-red-angry-routing.module';
import { BeeRedAngryComponent } from './bee-red-angry.component';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

@NgModule({
  declarations: [
    BeeRedAngryComponent
  ],
  imports: [
    CommonModule,
    BeeRedAngryRoutingModule,
    LibBeehiveUiSharedModule
  ]
})
export class BeeRedAngryModule { }
