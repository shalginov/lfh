import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: String
  pass: String

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  userAuthClick(){
    const user = {
      login: this.login,
      password: this.pass
    }

    if(user.password == undefined){
      this.flashMess.show('Enter passord', {cssClass: 'alert-danger', timeout: 1500})      
    return false
    }

   this.authService.authUser(user).subscribe(data => {
    if(!data.success){
      this.flashMess.show(`${data.message}`, {cssClass: 'alert-danger', timeout: 1500})      
     
    } else if (data.success){
      console.log('data'+data);
      this.flashMess.show(`${data.message}`, {cssClass: 'alert-success', timeout: 1500})      
      this.router.navigate(['/'])     
      this.authService.storeUser(data.token, data.user)
    }
   })
  }

}
