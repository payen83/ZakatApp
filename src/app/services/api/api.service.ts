import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string = 'https://fpx.zakatselangor.com.my/api/';
  constructor(public httpClient: HttpClient) { }

  //1. Add ==> import { HttpClientModule } from '@angular/common/http' in app.module.ts
  //2. Include HttpClientModule in imports section
  //3. Add ==> import { HttpClient } from '@angular/common/http' in services
  //4. Add ==> public httpClient: HttpClient inside constructor in services
  //5. identify url, body, method (get or post) in httpClient function
  //6. Call httpClient method inside the function functionName() in services
  //7. Call function call service.functionName() in page to invoke httpClient method
  //8. Received response from the method invoked.

  getPenyataTahunan(year: any, user: any){
    
    let url: string = this.baseURL + 'DisplayRecord/?';
    let body: string = 'requestType=kutipan' + '&mykad=' + user.no_kpb + '&recordGUID=' + user.cid + "&validation=yes" + "&year=" + year;

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

  getCawangan(){
    let url: string = this.baseURL + 'cawanganLZS.asp';

    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
        .subscribe((response: any) => {
          console.log(response);
          resolve(response);
        }, (error) => { reject(error) } )
    })

  }

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
