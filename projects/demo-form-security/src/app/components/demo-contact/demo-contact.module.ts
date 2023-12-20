import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoContactRoutingModule } from './demo-contact-routing.module';
import { DemoContactSharedModule } from './demo-contact-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DemoContactSharedModule,
    DemoContactRoutingModule
  ]
})
export class DemoContactModule { }
