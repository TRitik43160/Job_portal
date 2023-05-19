import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
import { ApplyService } from '../apply.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seekers',
  templateUrl: './seekers.component.html',
  styleUrls: ['./seekers.component.css']
})
export class SeekersComponent {
  data:any[][]=[[]];
  do:any;
constructor(private list:ApplyService){
// let a = document.querySelector('.display') as HTMLElement;
// a.style.display='block';
  this.data=this.list.data3;
  console.log(this.data);
  
 
  }
  
  fun(f:any){
  
    let b =document.querySelector('.s') as HTMLElement;
     this.do=f;
     let c=document.querySelector("p") as HTMLElement;
  if(this.do==''){
  b.style.display='none';
  c.setAttribute("style","display:block;");
  } 
  else{
      
    console.log("working else");
    c.setAttribute("style","display:none;");
  }
  }
   
}

