import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
// import {CabComponent} from '../cab/cab.component'
import { Ticket } from '../shared/ticket';
import { TicketService } from '../ticket.service';
import { TicmobService } from '../ticmob.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  tickets: Ticket[];
  current: Ticket;
  index: number;
  temp: any;

  num: number;
  date: string;  
  name: string ;
  tel: string ;
  mes: string ;
  perf:string ;
  completed: string ;
  
  ngOnInit(): void {
    console.log('ngOnInit works');
    

    this.index = this.ticmobService.index;
    console.log('index- ' + this.index);
         
    this.ticketService.getTickets().subscribe(data => {
      console.log('data - ' + data);
     
      this.tickets = data;     
     console.log('tickets - '+ this.tickets);
     
     this.index = this.tickets.length - this.index - 2
     console.log('index 2- ' + this.index);

      this.current = JSON.parse(JSON.stringify((this.tickets[this.index])));
      this.temp = JSON.parse(JSON.stringify(this.current));
      console.log('temp - '+typeof(this.temp));
      console.log(this.temp);
      
      
      console.log('Current - i' + JSON.stringify( this.current));  
      
      this.name = this.temp.name
      this.tel = this.current.tel;
      this.mes = this.current.text;
      this.perf = this.current.perf; 
      this.completed = this.current.status;     
      console.log('tickets - ' + this.tickets);   
      
    });
    }

  

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private ticketService: TicketService,
    private router: Router,
    private ticmobService: TicmobService,
  ) { 
    console.log('constructor works');
   
      
    
    
    // this.tickets = [];
    // this.current = this.ticmobService.getTicket();
    
      
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
        text: this.mes,
        perf: this.perf ,
        date: this.current.date,
        status: this.completed         
      }

      this.ticketService.update(this.index).subscribe()

      // console.log(this.tickets);

            
      // this.ticmobService.patchTicket(ticket);
      // this.router.navigate(['/cab'])
      // this.cabComp.pushTicket(1, 'some title', this.mes, this.perf );
      //     this.flashMess.show('Заявка создана', {cssClass: 'alert-success', timeout: 1500})      
      //     this.router.navigate(['/cab'])
      
  }

}
