import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'demo-table', loadChildren: () => import('./pages/demo-table/demo-table.module').then(m => m.DemoTableModule) },
  { path: 'demo-accessor-one', loadChildren: () => import('./pages/demo-accessor-one/demo-accessor-one.module').then(m => m.DemoAccessorOneModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
