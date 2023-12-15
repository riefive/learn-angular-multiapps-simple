import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IdentifierModule } from './features/identifier';
import { MenuModule } from './features/menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    IdentifierModule,
    MenuModule,
  ],
  exports: [IdentifierModule, MenuModule]
})
export class LibBeehiveUiSharedModule { }
