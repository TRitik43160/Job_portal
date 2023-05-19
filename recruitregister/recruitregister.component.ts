import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitregister',
  templateUrl: './recruitregister.component.html',
  styleUrls: ['./recruitregister.component.css']
})
export class RecruitregisterComponent {

  in(){
    var ins:any=document.querySelector(".instruction");
    ins.style.display="block";   
  }

  out(){
    var ins:any=document.querySelector(".instruction");
    ins.style.display="none"; 
  }
}
