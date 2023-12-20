import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoImageRoutingModule } from './demo-image-routing.module';
import { DemoImageSharedModule } from './demo-image-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DemoImageSharedModule,
    DemoImageRoutingModule
  ]
})
export class DemoImageModule { }