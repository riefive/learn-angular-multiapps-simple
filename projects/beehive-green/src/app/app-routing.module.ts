import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/beehive-green-happy',
    loadChildren: () => import('./pages/bee-green-happy/bee-green-happy.module').then(mod=>mod.BeeGreenHappyModule),
  },
  {
    path: 'pages/beehive-green-angry',
    loadChildren: () => import('./pages/bee-green-angry/bee-green-angry.module').then(mod=>mod.BeeGreenAngryModule),
  },
  { path: '', redirectTo: 'pages/beehive-green-happy', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/beehive-green-happy', pathMatch: 'full' },
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
