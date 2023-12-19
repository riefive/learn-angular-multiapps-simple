import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoSecurityRoutingModule } from './demo-security-routing.module';
import { DemoSecurityComponent } from './demo-security.component';
import { SafePipe } from '../../pipes/safe.pipe';

@NgModule({
  declarations: [
    DemoSecurityComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoSecurityRoutingModule,
  ],
  exports: [DemoSecurityComponent]
})
export class DemoSecurityModule { }
