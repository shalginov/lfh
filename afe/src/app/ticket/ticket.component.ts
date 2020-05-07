import { Component, OnInit, Inject } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {TicmobService} from '../ticmob.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
import { Ticket } from '../shared/ticket';
import {TicketService} from '../ticket.service'


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

tickets: Ticket[];

  name: string;
  tel: string;
  mes: string;
  perf:string;
  

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private ticmobService: TicmobService,
    private router: Router,
    private ticketService: TicketService,

  ) {  }

  ngOnInit(): void {
   this.ticketService.getTickets().subscribe(data => this.tickets = data);   
  }

  addTicket(){
   
      if(!this.checkForm.checkInput(this.name)){
        this.flashMess.show('Введите имя', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }
      if(!this.checkForm.checkInput(this.tel)){
        this.flashMess.show('Введите телефон', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }
      if(!this.checkForm.checkInput(this.mes)){
        this.flashMess.show('Напишите сообщение', {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }

      const ticket: Ticket = {
        num: this.tickets.length + 1,
        name: this.name,    
        tel: this.tel,        
        title: `${this.mes.substr(0,20)}...`,
        text: this.mes,
        perf: this.perf ? this.perf : '',
        date: '',
        status: 'new', 
      }
   
            
      this.ticketService.addTicket(ticket).subscribe();
      this.router.navigate(['/cab'])

  }

}
