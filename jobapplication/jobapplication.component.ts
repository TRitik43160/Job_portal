import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
import { ApplyService } from '../apply.service';
@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent {
  constructor(private list:ApplyService){}
  data2:any[]=[];
 fun(a:any,b:any,c:any,d:any,e:any,f:any,g:any,h:any,i:any){
  let verify:any=document.querySelector('.display');
  let box:any=document.querySelector('.Register-box');
   verify.style.display='block';
   box.style.display='none';

   this.data2.push(a,b,c,d,e,f,g,h,i);
   this.list.transfer(this.data2);
    console.log(this.data2);
 }
 hide(){
  let verify:any=document.querySelector('.display');
  let box:any=document.querySelector('.Register-box');
  verify.style.display='none';
  box.style.display='block';
}
}
