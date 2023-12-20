import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoContactComponent } from './demo-contact.component';
import { ErrorMessageComponent } from '../commons/error-message.component';
import { TextHighlightDirective } from '../../directives/text-highlight.directive';
import { TextHighlightEventDirective } from '../../directives/text-highlight-event.directive';

@NgModule({
    declarations: [
        ErrorMessageComponent,
        TextHighlightDirective,
        TextHighlightEventDirective,
        DemoContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        DemoContactComponent
    ]
})
export class DemoContactSharedModule { }