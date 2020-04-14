import { Component, OnInit, Input } from '@angular/core';

import { Ticket } from '../shared/ticket'



@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  @Input() ticket: Ticket; // from template

  // pushTicket(num, title, message, perf){
  //   const ticket = new Ticket (num, title, message, perf);
  //   tickets.push(ticket);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
