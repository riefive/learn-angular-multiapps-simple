import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoImageComponent } from './demo-image.component';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@NgModule({
    declarations: [
        LazyImageDirective,
        DemoImageComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DemoImageComponent
    ]
})
export class DemoImageSharedModule { }