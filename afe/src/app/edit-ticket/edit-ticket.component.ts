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
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  tickets: Ticket[];
  current: Ticket;

  ngOnInit(): void {
    this.tickets = this.ticmobService.getTickets(); 
    }

  name: string ;
  tel: string ;
  mes: string ;
  perf:string ;
  completed: boolean ;

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private ticmobService: TicmobService,
    private router: Router,
    // private cabComp: CabComponent
  ) { 
    this.tickets = [];
    this.current = this.ticmobService.getTicket();
    this.name = this.current.name ;
    this.tel = this.current.tel;
    this.mes = this.current.mes;
    this.perf = this.current.perf; 
    this.completed = this.current.completed;
      
  }

 

  editTicket(){
   
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
        num: this.current.num,
        name: this.name,    
        tel: this.tel,        
        title: this.current.title,
        mes: this.mes,
        perf: this.perf ,
        date: '05.04.20',
        completed: this.completed         
      }

      console.log(this.tickets);

            
      this.ticmobService.patchTicket(ticket);
      this.router.navigate(['/cab'])
      // this.cabComp.pushTicket(1, 'some title', this.mes, this.perf );
      //     this.flashMess.show('Заявка создана', {cssClass: 'alert-success', timeout: 1500})      
      //     this.router.navigate(['/cab'])
        
      
       
     


  }

}
