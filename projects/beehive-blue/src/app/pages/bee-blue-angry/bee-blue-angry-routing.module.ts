import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeBlueAngryComponent } from './bee-blue-angry.component';

const routes: Routes = [
  { path: '', component: BeeBlueAngryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeBlueAngryRoutingModule { }
