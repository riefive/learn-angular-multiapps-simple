import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from '../../projects/application1/src/app/app.module';
import { App2SharedModule } from '../../projects/application2/src/app/app.module';

const isImport = true;
let routes: Routes = [];

if (isImport) { // version 1
  routes = [
    { path: 'app1', loadChildren: () => import('../../projects/application1/src/app/app.module').then(m => m.App1SharedModule) },
    { path: 'app2', loadChildren: () => import('../../projects/application2/src/app/app.module').then(m => m.App2SharedModule) },
    {
      path: 'pages/beehive-red-happy',
      loadChildren: () => import('../../projects/beehive-red/src/app/pages/bee-red-happy/bee-red-happy.module').then(mod=>mod.BeeRedHappyModule),
    },
    {
      path: 'pages/beehive-red-angry',
      loadChildren: () => import('../../projects/beehive-red/src/app/pages/bee-red-angry/bee-red-angry.module').then(mod=>mod.BeeRedAngryModule),
    },
    {
      path: 'pages/beehive-green-happy',
      loadChildren: () => import('../../projects/beehive-green/src/app/pages/bee-green-happy/bee-green-happy.module').then(mod=>mod.BeeGreenHappyModule),
    },
    {
      path: 'pages/beehive-green-angry',
      loadChildren: () => import('../../projects/beehive-green/src/app/pages/bee-green-angry/bee-green-angry.module').then(mod=>mod.BeeGreenAngryModule),
    },
    {
      path: 'pages/beehive-blue-happy',
      loadChildren: () => import('../../projects/beehive-blue/src/app/pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
    },
    {
      path: 'pages/beehive-blue-angry',
      loadChildren: () => import('../../projects/beehive-blue/src/app/pages/bee-blue-angry/bee-blue-angry.module').then(mod=>mod.BeeBlueAngryModule),
    },
    { path: '**', redirectTo: '/app1/one'}
  ];
} else { // version 2
  routes = [
    { path: 'app1', loadChildren: '../../projects/application1/src/app/app.module#App1SharedModule' },
    { path: 'app2', loadChildren: '../../projects/application2/src/app/app.module#App1SharedModule' },
    { path: 'pages/beehive-red-happy', loadChildren: '../../projects/beehive-red/src/app/pages/bee-red-happy/bee-red-happy.module#BeeRedHappyModule' },
    { path: 'pages/beehive-red-angry', loadChildren: '../../projects/beehive-red/src/app/pages/bee-red-happy/bee-red-angry.module#BeeRedAngryModule' },
    { path: '**', redirectTo: '/app1/one'}
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes), App1SharedModule.forRoot(), App2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
