import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoContactComponent } from './demo-contact.component';

const routes: Routes = [
  { path: '', component: DemoContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoContactRoutingModule { }
