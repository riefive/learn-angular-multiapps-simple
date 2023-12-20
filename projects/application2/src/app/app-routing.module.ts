import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app2/one', loadChildren: () => import('./view1/view1-routing.module').then(m => m.View1RoutingModule) },
  { path: 'app2/two', loadChildren: () => import('./view2/view2-routing.module').then(m => m.View2RoutingModule) },
  { path: 'app2', redirectTo: 'app2/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingChildModule { }
