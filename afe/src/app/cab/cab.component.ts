import { Component, OnInit} from '@angular/core';
import { TicketService } from '../ticket.service'
import { Ticket } from '../shared/ticket'




@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  
   tickets: Ticket[] ;
  

  constructor(private ticketService: TicketService) {
    this.tickets = [];
   }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(data => this.tickets = data);
  }

  setNum(num){
    //this.ticmobService.setIndex(num);
  }

}
