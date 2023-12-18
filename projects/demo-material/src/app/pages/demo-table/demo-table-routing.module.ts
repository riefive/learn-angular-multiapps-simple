import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTableComponent } from './demo-table.component';

const routes: Routes = [
  { path: '', component: DemoTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTableRoutingModule { }
