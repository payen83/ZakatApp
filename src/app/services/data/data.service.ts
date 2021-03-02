import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async setObject(key_: string, value: any) {
    await Storage.set({
      key: key_,
      value: JSON.stringify(value)
    });
  }

  async getObject(key_: string) {
    const ret = await Storage.get({ key: key_ });
    return JSON.parse(ret.value);
  }

  async clear() {
    await Storage.clear();
  }

}
