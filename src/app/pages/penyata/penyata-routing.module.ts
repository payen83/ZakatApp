import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenyataPage } from './penyata.page';

const routes: Routes = [
  {
    path: '',
    component: PenyataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenyataPageRoutingModule {}
