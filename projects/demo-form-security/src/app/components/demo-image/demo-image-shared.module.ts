import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoImageComponent } from './demo-image.component';
import { ItemDetailComponent } from '../commons/item-detail.component';
import { LazyImageDirective } from '../../directives/lazy-image.directive';
import { ItemListComponent } from '../commons/item-list.component';

@NgModule({
    declarations: [
        LazyImageDirective,
        ItemDetailComponent,
        ItemListComponent,
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