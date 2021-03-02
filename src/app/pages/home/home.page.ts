import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import '@capacitor-community/http';

import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: string = 'abdrauf123';
  password: string = '1234';
  constructor(public httpClient: HttpClient) { }

  btnClick() {
    alert("Hello World");
    let a: any = 1;
    a = "ten";
    console.log('The a value is :', a);
  }

  calculateZakat(value: any) {
    let result: number = 0;
    return result;
  }


}
