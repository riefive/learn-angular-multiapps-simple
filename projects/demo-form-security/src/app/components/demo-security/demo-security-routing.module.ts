import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSecurityComponent } from './demo-security.component';

const routes: Routes = [
  { path: '', component: DemoSecurityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoSecurityRoutingModule { }
