import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalkulatorPage } from './kalkulator.page';

const routes: Routes = [
  {
    path: '',
    component: KalkulatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalkulatorPageRoutingModule {}
