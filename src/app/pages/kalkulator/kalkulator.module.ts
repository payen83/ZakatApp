import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalkulatorPageRoutingModule } from './kalkulator-routing.module';

import { KalkulatorPage } from './kalkulator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalkulatorPageRoutingModule
  ],
  declarations: [KalkulatorPage]
})
export class KalkulatorPageModule {}
