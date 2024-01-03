import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAccessorTwoRoutingModule } from './demo-accessor-two-routing.module';
import { DemoAccessorTwoComponent } from './demo-accessor-two.component';
import { InputPhoneNumberComponent } from '../../components/input-phone-number/input-phone-number.component';
import { ButtonToggleComponent } from '../../components/button-toggle/button-toggle.component';

@NgModule({
  declarations: [InputPhoneNumberComponent, ButtonToggleComponent, DemoAccessorTwoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAccessorTwoRoutingModule
  ],
  exports: [DemoAccessorTwoComponent]
})
export class DemoAccessorTwoModule { }
