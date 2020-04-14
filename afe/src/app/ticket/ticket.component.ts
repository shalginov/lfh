import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {TicketService} from '../ticket.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
import {CabComponent} from '../cab/cab.component'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


  name: String;
  tel: String;
  mes: String;
  perf:String;

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private ticketServ: TicketService,
    private router: Router,
    private cabComp: CabComponent
  ) { }

  ngOnInit(): void {
  }

  addTicket(){
    const ticket = {
      first_name: this.name,
      tel: this.tel,
      text: this.mes,
      perf: this.perf
    }
   
   
      if(!this.checkForm.checkInput(ticket.first_name)){
        this.flashMess.show('Введите имя', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }
      if(!this.checkForm.checkInput(ticket.tel)){
        this.flashMess.show('Введите телефон', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }
      if(!this.checkForm.checkInput(ticket.text)){
        this.flashMess.show('Напишите сообщение', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }
      
      this.cabComp.pushTicket(1, 'some title', this.mes, this.perf );
          this.flashMess.show('Заявка создана', {cssClass: 'alert-success', timeout: 1500})      
          this.router.navigate(['/cab'])
        
      
       
     


  }

}
