import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'demo-image', loadChildren: () => import('./components/demo-image/demo-image.module').then(m => m.DemoImageModule) },
  { path: 'demo-contact', loadChildren: () => import('./components/demo-contact/demo-contact.module').then(m => m.DemoContactModule) },
  { path: 'demo-security', loadChildren: () => import('./components/demo-security/demo-security.module').then(m => m.DemoSecurityModule) },
  { path: '**', redirectTo: 'demo-image' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
