import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cawangan',
  templateUrl: './cawangan.page.html',
  styleUrls: ['./cawangan.page.scss'],
})
export class CawanganPage implements OnInit {
  public cawanganList: Array<any>;
  public defaultList: Array<any>;
  constructor(public apiService: ApiService, public dataService: DataService) {
    this.cawanganList = [];
    this.defaultList = [];
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      let response: any = await this.apiService.getCawangan();
      this.cawanganList = response;
      //simpan data in data.service
      this.setListCawangan();

      //set list into default list to trigger data during search.
      this.defaultList = this.cawanganList;
      this.getSearch();
    } catch (error) {
      console.log('error =>', error)
    }
  }

  getSearch() {
    let searchKeyword = this.dataService.getTempData();
    //if searchKeyword not null, perform search function
    if (searchKeyword) {
      // perform search function
      this.initializeItems();
      this.searchCawangan(searchKeyword);
      this.dataService.setTempData(null);
    }
  }

  setListCawangan(){
    this.dataService.setDataCawangan(this.cawanganList);
  }

  searchCawangan(val: any) {
    this.cawanganList = this.cawanganList.filter((item) => {
      return (item.cawangan.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    this.setListCawangan();
  }

  initializeItems() {
    this.cawanganList = this.defaultList;
    this.setListCawangan();
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.searchCawangan(val);
    }

  }

}
