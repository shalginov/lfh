import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;
  warning: InnerHTML

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
   const user = {
     name: this.name,
     login: this.login,
     email: this.email,
     password: this.password     
   };
   
   for (const [key, value] of Object.entries(user) ) {
    if(!this.checkForm.checkInput(value)){
      this.flashMess.show(`${key} is undefined`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }

     
   }
   

  }

}
