import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  btnClick() {
    alert("Hello World");
    let a: any = 1;
    a = "ten";
    console.log('The a value is :', a);
  }

  calculateZakat(value: any){
    let result: number = 0;
    return result;
  }

}
