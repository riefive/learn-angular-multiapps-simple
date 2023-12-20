import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAllRoutingModule } from './demo-all-routing.module';
import { DemoAllComponent } from './demo-all.component';
import { DemoContactSharedModule } from '../demo-contact/demo-contact-shared.module';
import { DemoImageSharedModule } from '../demo-image/demo-image-shared.module';
import { DemoSecuritySharedModule } from '../demo-security/demo-security-shared.module';

@NgModule({
  declarations: [
    DemoAllComponent,
  ],
  imports: [
    CommonModule,
    DemoContactSharedModule,
    DemoImageSharedModule,
    DemoSecuritySharedModule,
    DemoAllRoutingModule
  ],
  exports: [DemoAllComponent]
})
export class DemoAllModule { }
