import { Component, OnInit} from '@angular/core';
import { TicketService } from '../ticket.service'
import { Ticket } from '../shared/ticket'
import { TicmobService } from '../ticmob.service'




@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabComponent implements OnInit {

  
   tickets: Ticket[] ;
  

  constructor(
    private ticketService: TicketService,
    private ticmobService: TicmobService
    )
   {
   }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
            
    }
      );   
  }

  refreshTicketsOnCab() {
    this.ticketService.getTickets().subscribe(data => this.tickets = data);
  }

  setNum(num){
    this.ticmobService.setIndex(num);
  }

}
