import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app1', loadChildren: () => import('../../projects/application1/src/app/app.module').then(m => m.App1SharedModule) },
  { path: 'app2', loadChildren: () => import('../../projects/application2/src/app/app.module').then(m => m.App2SharedModule) },
  { path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
