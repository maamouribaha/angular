import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getSomeValueOf(list: any[], critiria: string, value: any) {
    let stat = 0;
    for (let i in list) {
      if (list[i][critiria] == value) {
        stat++;
      }
    }
    return stat;
  }
}
