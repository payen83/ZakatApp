import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string = 'https://fpx.zakatselangor.com.my/api/';
  constructor(public httpClient: HttpClient) { }

  login(user: any) {
    let url: string = this.baseURL + 'EzoLogin/api_ezoLogin.asp';
    let body: string = 'requestType=login' + '&id=' + user.id + '&password=' + user.password;

    const headers: HttpHeaders = new HttpHeaders().set('Content-Type',
      'application/x-www-form-urlencoded;');

    const options = {
      headers: headers
    };

    return new Promise((resolve, reject) => {
      this.httpClient.post(url, body, options)
        .subscribe((response: any) => {
          console.log(response);
          if (response.status == 'Pass') {
            resolve(response);
          } else {
            reject(response.error);
          }
        })
    })

  }

}
