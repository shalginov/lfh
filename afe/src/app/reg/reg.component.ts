import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  login: String;
  password: String;
  first_name: String;
  last_name: String;
  

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
   const user = {
    login: this.login, 
    password: this.password,
    first_name: this.first_name,
    last_name: this.last_name,
   };
   
   for (const [key, value] of Object.entries(user) ) {
    if(!this.checkForm.checkInput(value)){
      this.flashMess.show(`${key} is undefined`, {cssClass: 'alert-danger', timeout: 1500});      
   
      return false;      
    }

   
      this.authService.regUser(user).subscribe(data => {
        if(!data.success){
          this.flashMess.show(`${data.message}`, {cssClass: 'alert-danger', timeout: 1500})      
          this.router.navigate(['/'])     
        } else if (data.sucess){
          this.flashMess.show(`${data.message}`, {cssClass: 'alert-success', timeout: 1500})      
          this.router.navigate(['/auth'])     
        }
  
      })
   

     
   }
   

  }

}
