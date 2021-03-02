import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.page.html',
  styleUrls: ['./kalkulator.page.scss'],
})
export class KalkulatorPage implements OnInit {
  //declaration 
  public hasilPenggajian: number;
  public hasilBebas: number;
  public tolakanIsiRumah: number;
  public tolakanLain: number;
  public jumlahZakat: number;

  constructor(public alertController: AlertController) { 
    this.resetData();
  }

  ngOnInit() {
  }

  resetData(){
    this.hasilPenggajian = null;
    this.hasilBebas = null;
    this.tolakanLain = null;
    this.tolakanIsiRumah = null;
    this.jumlahZakat = null;
  }

  kiraZakat(){
    let bakiPendapatan = ( Number(this.hasilPenggajian) + Number(this.hasilBebas)) - (Number(this.tolakanIsiRumah) + Number(this.tolakanLain));
    
    this.jumlahZakat = null;
    
    if(this.checkBalancePendapatan(bakiPendapatan)){
      this.jumlahZakat = (bakiPendapatan)*(2.5/100);
      let mesej: string = 'Jumlah zakat anda adalah RM' + this.jumlahZakat;
      this.presentAlert(mesej);
    } else {
      //alert pop-up, tidak perlu zakat;
      this.presentAlert('Anda tidak dikenakan zakat kerana baki pendapatan anda kurang dari RM20,000');
    }
    //console.log(this.jumlahZakat);
  }

  checkBalancePendapatan(pendapatan: number){
    return pendapatan >= 20000;
  }

  async presentAlert(mesej: string) {
    const alert = await this.alertController.create({
      header: 'Notifikasi',
      message: mesej,
      buttons: ['OK']
    });

    await alert.present();
  }

}
