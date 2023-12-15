import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeGreenHappyComponent } from './bee-green-happy.component';

const routes: Routes = [
  { path: '', component: BeeGreenHappyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeGreenHappyRoutingModule { }
