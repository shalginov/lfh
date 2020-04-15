import { Injectable } from '@angular/core';

import { Ticket } from './shared/ticket'
import { tickets } from './shared/data'


@Injectable({
  providedIn: 'root'
})
export class TicmobService {

  constructor() { }

  tickets: Ticket[] = tickets;
  index: number;
  
  getTickets(): Ticket[] {
    return this.tickets;
  }

  createTicket(ticket: Ticket){
    this.tickets.push(ticket)
  }

  patchTicket(ticket: Ticket){    
    const i = ticket.num - 1;
    this.tickets[i].name = ticket.name;    
    this.tickets[i].perf = ticket.perf;    
    this.tickets[i].tel = ticket.tel;    
    this.tickets[i].mes = ticket.mes;    
    this.tickets[i].completed = ticket.completed;    
    
    
    
  }

  setIndex(index: number){
    this.index = index - 1;
  }

  getTicket(): Ticket {
    return this.tickets[this.index]
  }


}
