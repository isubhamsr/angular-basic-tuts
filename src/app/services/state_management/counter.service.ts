import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  private count:number = 0

  getCounter(){
    return this.count;
  }

  incrimentCount(){
    return this.count = this.count + 1
  }
}
