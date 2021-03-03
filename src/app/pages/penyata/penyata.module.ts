import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PenyataPageRoutingModule } from './penyata-routing.module';
import { PenyataPage } from './penyata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenyataPageRoutingModule,
  ],
  declarations: [PenyataPage]
})
export class PenyataPageModule {}
