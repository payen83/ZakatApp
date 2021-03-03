import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any;
  public profile: any;
  constructor(public apiService: ApiService, public dataService: DataService) { 
    this.resetUser();
    this.profile = null;
  }

  resetUser(){
    this.user = { id: null, password: null };
  }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile(){
    let response = await this.dataService.getObject('USER');
    if (response) {
      // console.log(response);
      this.profile = response;
    } 
  }

  async doLogout(){
    await this.dataService.clear();
    this.resetUser();
    this.profile = null;
  }

  async doLogin(){
    try {
      let response = await this.apiService.login(this.user);
      if(response){
        //save data here
        this.dataService.setObject('USER', response);
        this.profile = response;
      } else {
        console.log('no data available');
      }
    } catch(error) {
      //console.log('error message: ', error);
      alert(error);
    }
  }
  
}
