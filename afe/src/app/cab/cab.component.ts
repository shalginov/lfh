import { Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs'
import { TicketService } from '../ticket.service'
import { Ticket } from '../shared/ticket'
import { TicmobService } from '../ticmob.service'
import { Filter } from '../shared/interfaces';
import { tick } from '@angular/core/testing';




@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabComponent implements OnInit {

  
   tickets: Ticket[] ;
   filter: Filter = {} 
   oSub: Subscription


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

  private fetch() {
    const params =  this.filter
    this.oSub = this.ticketService.fetch(params).subscribe(tickets => {
      this.tickets = tickets      
    })
  }

  refreshTicketsOnCab() {
    this.ticketService.getTickets().subscribe(data => this.tickets = data);
  }

  setNum(num){
    this.ticmobService.setIndex(num);
  }

  applyFilter(filter: Filter){
    this.tickets = []
    this.filter = filter
    this.fetch()
  }

  clearFilter(){
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;            
      }    
    );
  }

}
