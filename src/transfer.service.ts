import { Injectable } from '@angular/core';

@Injectable()
export class TransferService {

  list :any = []

  index :number;

  constructor() { }

  getAddDataList(){
    return this.list
  }

  getIndex(){
    return this.index
  }
}