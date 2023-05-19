import { Component } from '@angular/core';
import { ApplyService } from '../apply.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private list:ApplyService){}

}
