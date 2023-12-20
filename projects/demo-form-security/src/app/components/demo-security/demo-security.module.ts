import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoSecurityRoutingModule } from './demo-security-routing.module';
import { DemoSecuritySharedModule } from './demo-security-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DemoSecuritySharedModule,
    DemoSecurityRoutingModule,
  ],
})
export class DemoSecurityModule { }
