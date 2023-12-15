import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeGreenAngryComponent } from './bee-green-angry.component';

const routes: Routes = [
  { path: '', component: BeeGreenAngryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeGreenAngryRoutingModule { }
