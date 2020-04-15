import { Component, OnInit} from '@angular/core';
import { TicmobService } from '../ticmob.service'

import { Ticket } from '../shared/ticket'
import { tickets } from '../shared/data'



@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  
   tickets: Ticket[] = tickets;
  

  constructor(private ticmobService: TicmobService) {
    this.tickets = [];
   }

  ngOnInit(): void {
    this.tickets = this.ticmobService.getTickets();
  }

  setNum(num){
    this.ticmobService.setIndex(num);
  }

}
