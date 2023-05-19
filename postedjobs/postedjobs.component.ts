import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent {
  data:any[][]=[[]];
   do:any
constructor(private list:TransferService){

  this.data=this.list.data1;
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
