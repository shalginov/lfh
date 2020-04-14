import { Component, OnInit } from '@angular/core';

class Ticket {
  constructor (
  public num: number,
  public title: string,
  public message: string,
  public perf: string = '',
  public date: number = Date.now(),
  public completed: boolean =false) {}
}

const tickets : Ticket[] = [
 {    
  num: 1,
  title: 'Обновить Word',
  message: 'Установить ворд главному бухгалтеру',
  perf: 'Шалгинов',
  date: 140520,
  completed: false
  },
  

]


@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {
  tickets : Ticket[] = tickets;

  pushTicket(num, title, message, perf){
    const ticket = new Ticket (num, title, message, perf);
    tickets.push(ticket);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
