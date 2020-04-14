import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {TicmobService} from '../ticmob.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
// import {CabComponent} from '../cab/cab.component'
import { tick } from '@angular/core/testing';
import { Ticket } from '../shared/ticket';
import { tickets } from '../shared/data';


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
    // private cabComp: CabComponent
  ) { this.tickets = [] }

  ngOnInit(): void {
    this.tickets = this.ticmobService.getTickets();
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
        mes: this.mes,
        perf: this.perf ? this.perf : '',
        date: '05.04.20',
        completed: false 
      }

      console.log(this.tickets);

            
      this.ticmobService.createTicket(ticket);
      this.router.navigate(['/cab'])
      // this.cabComp.pushTicket(1, 'some title', this.mes, this.perf );
      //     this.flashMess.show('Заявка создана', {cssClass: 'alert-success', timeout: 1500})      
      //     this.router.navigate(['/cab'])
        
      
       
     


  }

}
