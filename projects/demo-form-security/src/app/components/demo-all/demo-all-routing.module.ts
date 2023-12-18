import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAllComponent } from './demo-all.component';

const routes: Routes = [
  { path: '', component: DemoAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoAllRoutingModule { }
