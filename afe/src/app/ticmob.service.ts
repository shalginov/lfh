import { Injectable } from '@angular/core';

import { Ticket } from './shared/ticket'
import { tickets } from './shared/data'


@Injectable({
  providedIn: 'root'
})
export class TicmobService {

  constructor() { }

  tickets: Ticket[] = tickets;

  getTickets(): Ticket[] {
    return this.tickets;
  }

  createTicket(ticket: Ticket){
    this.tickets.push(ticket)
  }


}
