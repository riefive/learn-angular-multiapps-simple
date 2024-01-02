import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAccessorTwoComponent } from './demo-accessor-two.component';

const routes: Routes = [
  { path: '', component: DemoAccessorTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoAccessorTwoRoutingModule { }
