import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {AuthService} from '../auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login:String;
  pass:String;

  constructor(
    private checkForm: CheckFormService,
    private flashMess: FlashMessagesService,
    private authServ: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    const user = {
      login: this.login,
      password: this.pass
    };

      if(!this.checkForm.checkInput(user.login)){
        this.flashMess.show('Введите логин', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }

      if(!this.checkForm.checkInput(user.password)){
        this.flashMess.show('Введите пароль', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }

      this.authServ.loginUser(user).subscribe(data => {
      if(!data.success){
        this.flashMess.show(data.message, {cssClass: 'alert-danger', timeout: 1500})      
        this.router.navigate(['/auth'])
      } else if(data.success) {
        this.flashMess.show(data.message, {cssClass: 'alert-success', timeout: 1500})      
        this.router.navigate(['/cab'])
        this.authServ.storeUser(data.token, data.user)
      }
  })
  }
}
