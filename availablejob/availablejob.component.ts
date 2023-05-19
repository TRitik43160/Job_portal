import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
@Component({
  selector: 'app-availablejob',
  templateUrl: './availablejob.component.html',
  styleUrls: ['./availablejob.component.css']
})
export class AvailablejobComponent {
  data:any[][]=[[]];
  do:any;
constructor(private list:TransferService){
// let a = document.querySelector('.display') as HTMLElement;
// a.style.display='block';
  this.data=this.list.data1;
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
// hell(){
//   this.list.transfer2(this.data);
// }
}
