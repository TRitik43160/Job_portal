import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  
  
  in(){
    var ins:any=document.querySelector(".instruction");
    ins.style.display="block";
    
    
  }
  out(){
    var ins:any=document.querySelector(".instruction");
    ins.style.display="none";
    
  }
  
}
// let r= new RegisterComponent;
// let fun=r.fun;

