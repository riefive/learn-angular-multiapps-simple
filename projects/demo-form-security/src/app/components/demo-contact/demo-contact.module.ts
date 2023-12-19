import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoContactRoutingModule } from './demo-contact-routing.module';
import { DemoContactComponent } from './demo-contact.component';
import { ErrorMessageComponent } from '../commons/error-message.component';
import { TextHighlightDirective } from '../../directives/text-highlight.directive';
import { TextHighlightEventDirective } from '../../directives/text-highlight-event.directive';

@NgModule({
  declarations: [
    DemoContactComponent,
    ErrorMessageComponent,
    TextHighlightDirective,
    TextHighlightEventDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoContactRoutingModule
  ],
  exports: [DemoContactComponent]
})
export class DemoContactModule { }