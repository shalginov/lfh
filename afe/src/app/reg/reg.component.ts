import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {AuthService} from '../auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  first_name: String;
  login: String;
  last_name: String;
  password: String;
  

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private authServ: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
   const user = {
     first_name: this.first_name,
     login: this.login,
     last_name: this.last_name,
     password: this.password     
   };
   
   
    if(!this.checkForm.checkInput(user.first_name)){
      this.flashMess.show(`Введите имя`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }
    if(!this.checkForm.checkInput(user.last_name)){
      this.flashMess.show(`Введите фамилию`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }if(!this.checkForm.checkInput(user.login)){
      this.flashMess.show(`Введите логин`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }if(!this.checkForm.checkInput(user.password)){
      this.flashMess.show(`Введите пароль`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }


    this.authServ.regUser(user).subscribe(data => {
      if(!("_id" in data)){
        this.flashMess.show('Пользователь не зарегистрирован', {cssClass: 'alert-danger', timeout: 1500})      
        this.router.navigate(['/ticket'])
      } else if("_id" in data) {
        this.flashMess.show('Пользователь зарегистрирован', {cssClass: 'alert-success', timeout: 1500})      
        this.router.navigate(['/cab'])
      }
    })
  
     
   }
   

}


