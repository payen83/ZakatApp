import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CawanganDetailPageRoutingModule } from './cawangan-detail-routing.module';

import { CawanganDetailPage } from './cawangan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CawanganDetailPageRoutingModule
  ],
  declarations: [CawanganDetailPage]
})
export class CawanganDetailPageModule {}
