import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from '../../projects/application1/src/app/app.module';
import { App2SharedModule } from '../../projects/application2/src/app/app.module';

const isImport = false;
let routes: Routes = [];

if (isImport) {
  routes = [
    { path: 'app1', loadChildren: () => import('../../projects/application1/src/app/app.module').then(m => m.App1SharedModule) },
    { path: 'app2', loadChildren: () => import('../../projects/application2/src/app/app.module').then(m => m.App2SharedModule) },
    { path: '**', redirectTo: '/app1/one'}
  ];
} else {
  routes = [
    { path: 'app1', loadChildren: '../../projects/application1/src/app/app.module#App1SharedModule' },
    { path: 'app2', loadChildren: '../../projects/application2/src/app/app.module#App1SharedModule' },
    { path: '**', redirectTo: '/app1/one'}
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes), App1SharedModule.forRoot(), App2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
