import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAccessorOneComponent } from './demo-accessor-one.component';

const routes: Routes = [
  { path: '', component: DemoAccessorOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoAccessorOneRoutingModule { }
