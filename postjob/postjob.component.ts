import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})

export class PostjobComponent {
  // f={name:'' };
  constructor(private list:TransferService){}
  data2:any[]=[];

fun(CompanyName:any,JobRole:any,Experience:any,Skills:any,PostedDate:any,JobType:any){
  let verify:any=document.querySelector('.display');
  let box:any=document.querySelector('.Register-box');
   verify.style.display='block';
   box.style.display='none';
 
   this.data2.push(CompanyName,JobRole,Experience,Skills,PostedDate,JobType);
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
