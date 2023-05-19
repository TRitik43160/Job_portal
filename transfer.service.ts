import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  data1:any[][]=[[]];
  data2:any[]=[]
  constructor() { }
  transfer(e:any){
   this.data1.push(e);
  }
  transfer2(e:any){
    this.data2=e;
   }
}
