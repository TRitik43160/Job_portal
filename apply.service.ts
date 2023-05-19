import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  constructor() { }
  data3:any[][]=[[]];
  data4:any[]=[]
  
  transfer(e:any){
   this.data3.push(e);
  }
  transfer2(e:any){
    this.data4=e;
   }
 
}
