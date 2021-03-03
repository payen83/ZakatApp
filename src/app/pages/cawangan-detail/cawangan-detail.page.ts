import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cawangan-detail',
  templateUrl: './cawangan-detail.page.html',
  styleUrls: ['./cawangan-detail.page.scss'],
})
export class CawanganDetailPage implements OnInit {
  public index: any;
  public cawangan: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public dataService: DataService
    ) { 
    this.index = this.activatedRoute.snapshot.paramMap.get('index');
    console.log('current index: ', this.index);
    this.cawangan = {
      alamat1: null,
      alamat2: null,
      bandar: null,
      cawangan: null,
      daerah: null,
      image: null,
      negeri: null,
      notel: null,
      poskod: null
    }
  }

  ngOnInit() {
    this.cawangan = this.dataService.getDataCawangan(this.index);
    console.log(this.cawangan);
  }

}
