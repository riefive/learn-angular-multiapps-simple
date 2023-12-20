import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app1/home', loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'app1/one', loadChildren: () => import('./view1/view1-routing.module').then(m => m.View1RoutingModule) },
  { path: 'app1/two', loadChildren: () => import('./view2/view2-routing.module').then(m => m.View2RoutingModule) },
  { path: 'app1', redirectTo: 'app1/one' }
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
