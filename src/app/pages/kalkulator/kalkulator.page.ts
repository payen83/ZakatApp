import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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

    this.jumlahZakat = (bakiPendapatan)*(2.5/100);
    console.log(this.jumlahZakat);
  }

}
