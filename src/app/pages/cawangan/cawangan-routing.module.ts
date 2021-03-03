import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CawanganPage } from './cawangan.page';

const routes: Routes = [
  {
    path: '',
    component: CawanganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CawanganPageRoutingModule {}
