import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAllRoutingModule } from './demo-all-routing.module';
import { DemoAllComponent } from './demo-all.component';
import { DemoImageModule } from '../demo-image/demo-image.module';
import { DemoContactModule } from '../demo-contact/demo-contact.module';
import { DemoSecurityModule } from '../demo-security/demo-security.module';

@NgModule({
  declarations: [
    DemoAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoImageModule,
    DemoContactModule,
    DemoSecurityModule,
    DemoAllRoutingModule
  ],
  exports: [DemoAllComponent]
})
export class DemoAllModule { }
