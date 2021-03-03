import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tempData: any;
  public cawanganList: Array<any>;
  constructor() { 
    this.tempData = null;
    this.cawanganList = [];
  }

  async setObject(key_: string, value: any) {
    await Storage.set({
      key: key_,
      value: JSON.stringify(value)
    });
  }

  setTempData(value: any) {
    this.tempData = value;
  }

  getTempData(){
    return this.tempData;
  }

  setDataCawangan(cawanganList: any){
    this.cawanganList = cawanganList;
  }

  getDataCawangan(index: number){
    return this.cawanganList[index];
  }

  async getObject(key_: string) {
    const ret = await Storage.get({ key: key_ });
    return JSON.parse(ret.value);
  }

  async clear() {
    await Storage.clear();
  }

}
