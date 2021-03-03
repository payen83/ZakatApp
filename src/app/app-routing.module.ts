import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'kalkulator',
    loadChildren: () => import('./pages/kalkulator/kalkulator.module').then( m => m.KalkulatorPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cawangan',
    loadChildren: () => import('./pages/cawangan/cawangan.module').then( m => m.CawanganPageModule)
  },
  {
    path: 'cawangan-detail/:index',
    loadChildren: () => import('./pages/cawangan-detail/cawangan-detail.module').then( m => m.CawanganDetailPageModule)
  },
  {
    path: 'penyata',
    loadChildren: () => import('./pages/penyata/penyata.module').then( m => m.PenyataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
