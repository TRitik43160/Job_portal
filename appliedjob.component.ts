import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
import { ApplyService } from '../apply.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.css']
})
export class AppliedjobComponent {
  data:any[][]=[[]];
  do:any;
constructor(private list:ApplyService){

  this.data=list.data3;
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