import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DemoTableComponent } from './demo-table.component';
import { DemoTableRoutingModule } from './demo-table-routing.module';

@NgModule({
  declarations: [DemoTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    DemoTableRoutingModule
  ],
  exports: [DemoTableComponent]
})
export class DemoTableModule { }
