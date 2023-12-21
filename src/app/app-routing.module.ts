import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from '../../projects/application1/src/app/app-shared.module';
import { App2SharedModule } from '../../projects/application2/src/app/app-shared.module';
import { FirstComponent } from './first/first.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';
import { GlobalGuard } from './guards/global.guard';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { 
    path: 'login', 
    canActivate: [GlobalGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'app1', 
    loadChildren: () => import('../../projects/application1/src/app/app-shared.module').then(m => m.App1SharedModule) 
  },
  { 
    path: 'app2',
    loadChildren: () => import('../../projects/application2/src/app/app-shared.module').then(m => m.App2SharedModule) 
  },
  {
    path: 'pages',
    canActivate: [GlobalGuard, AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: 'beehive-red-happy',
        loadChildren: () => import('../../projects/beehive-red/src/app/pages/bee-red-happy/bee-red-happy.module').then(mod=>mod.BeeRedHappyModule),
      },
      {
        path: 'beehive-red-angry',
        loadChildren: () => import('../../projects/beehive-red/src/app/pages/bee-red-angry/bee-red-angry.module').then(mod=>mod.BeeRedAngryModule),
      },
      {
        path: 'beehive-green-happy',
        loadChildren: () => import('../../projects/beehive-green/src/app/pages/bee-green-happy/bee-green-happy.module').then(mod=>mod.BeeGreenHappyModule),
      },
      {
        path: 'beehive-green-angry',
        loadChildren: () => import('../../projects/beehive-green/src/app/pages/bee-green-angry/bee-green-angry.module').then(mod=>mod.BeeGreenAngryModule),
      },
      {
        path: 'beehive-blue-happy',
        loadChildren: () => import('../../projects/beehive-blue/src/app/pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
      },
      {
        path: 'beehive-blue-angry',
        loadChildren: () => import('../../projects/beehive-blue/src/app/pages/bee-blue-angry/bee-blue-angry.module').then(mod=>mod.BeeBlueAngryModule),
      },
    ]
  },
  {
    path: 'demos',
    canActivate: [GlobalGuard, AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      { 
        path: 'contact', 
        loadChildren: () => import('../../projects/demo-form-security/src/app/components/demo-contact/demo-contact.module').then(m => m.DemoContactModule) 
      },
      { 
        path: 'image', 
        loadChildren: () => import('../../projects/demo-form-security/src/app/components/demo-image/demo-image.module').then(m => m.DemoImageModule) 
      },
      { 
        path: 'security', 
        loadChildren: () => import('../../projects/demo-form-security/src/app/components/demo-security/demo-security.module').then(m => m.DemoSecurityModule) 
      },
      { 
        path: 'table', 
        loadChildren: () => import('../../projects/demo-material/src/app/pages/demo-table/demo-table.module').then(m => m.DemoTableModule) 
      },
    ]
  },
  { path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }), 
    App1SharedModule.forRoot(), 
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
