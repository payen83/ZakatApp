import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-penyata',
  templateUrl: './penyata.page.html',
  styleUrls: ['./penyata.page.scss'],
})
export class PenyataPage implements OnInit {
  public yearList: Array<any>;
  public selectedYear: any;
  public user: any;
  public penyataList: Array<any>
  constructor(public apiService: ApiService, public dataService: DataService) { 
    //get current year
    let date: Date = new Date();
    this.yearList = [];
    this.penyataList = [];
    //insert year in array
    for (let i = 0; i < 5; i++){
      this.yearList[i] = date.getFullYear() - i;
    }
    this.selectedYear = date.getFullYear();
  }

  async getUser(){
    this.user = await this.dataService.getObject('USER');
   // console.log(this.user);
  }

  async getPenyata(){
    await this.getUser();
    
    if(this.user){
      // insert loadingController function here;
      try {
        let response: any = await this.apiService.getPenyataTahunan(this.selectedYear, this.user);
       // console.log(response);
       this.penyataList = response.paymentHistory;
      } catch(error) {
        alert(error);
      }
    } else {
      alert('Pengguna tidak jumpai. Sila login terlebih dahulu')
    }
    
  }

  ngOnInit() {
    this.getPenyata();
    // console.log(this.yearList);
  }

}
