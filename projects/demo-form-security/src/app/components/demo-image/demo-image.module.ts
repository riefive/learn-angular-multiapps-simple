import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoImageRoutingModule } from './demo-image-routing.module';
import { DemoImageComponent } from './demo-image.component';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@NgModule({
  declarations: [
    DemoImageComponent,
    LazyImageDirective
  ],
  imports: [
    CommonModule,
    DemoImageRoutingModule
  ],
  exports: [DemoImageComponent]
})
export class DemoImageModule { }