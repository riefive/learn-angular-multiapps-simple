import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoSecurityComponent } from './demo-security.component';
import { SafePipe } from '../../pipes/safe.pipe';

@NgModule({
    declarations: [
        SafePipe,
        DemoSecurityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DemoSecurityComponent
    ]
})
export class DemoSecuritySharedModule { }
