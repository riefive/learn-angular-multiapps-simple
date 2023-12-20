import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/beehive-blue-happy',
    loadChildren: () => import('./pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
  },
  {
    path: 'pages/beehive-blue-angry',
    loadChildren: () => import('./pages/bee-blue-angry/bee-blue-angry.module').then(mod=>mod.BeeBlueAngryModule),
  },
  { path: '', redirectTo: 'pages/beehive-blue-happy', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/beehive-blue-happy', pathMatch: 'full' },
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
