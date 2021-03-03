import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CawanganPageRoutingModule } from './cawangan-routing.module';

import { CawanganPage } from './cawangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CawanganPageRoutingModule
  ],
  declarations: [CawanganPage]
})
export class CawanganPageModule {}
