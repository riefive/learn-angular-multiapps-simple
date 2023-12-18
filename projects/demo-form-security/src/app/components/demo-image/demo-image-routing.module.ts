import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoImageComponent } from './demo-image.component';

const routes: Routes = [
  { path: '', component: DemoImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoImageRoutingModule { }
