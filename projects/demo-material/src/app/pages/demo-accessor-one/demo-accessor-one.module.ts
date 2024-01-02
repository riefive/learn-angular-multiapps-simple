import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoAccessorOneRoutingModule } from './demo-accessor-one-routing.module';
import { InputCustomComponent } from '../../components/input-custom/input-custom.component';
import { DemoAccessorOneComponent } from './demo-accessor-one.component';

@NgModule({
  declarations: [InputCustomComponent, DemoAccessorOneComponent],
  imports: [
    CommonModule,
    FormsModule,
    DemoAccessorOneRoutingModule
  ],
  exports: [DemoAccessorOneComponent]
})
export class DemoAccessorOneModule { }
