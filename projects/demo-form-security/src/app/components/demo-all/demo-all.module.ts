import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAllRoutingModule } from './demo-all-routing.module';
import { DemoAllComponent } from './demo-all.component';

@NgModule({
  declarations: [
    DemoAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAllRoutingModule
  ],
})
export class DemoAllModule { }
